from flask import Flask, request, jsonify, redirect, render_template
import pickle
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    """Redirect root URL to /home."""
    return redirect("/home")

@app.route("/home")
def home():
    """Render the home page."""
    return render_template("index.html")

@app.errorhandler(404)
def page_not_found(e):
    """Handle 404 errors and redirect to /home."""
    return redirect("/home")

try:
    medical_data = pd.read_csv('./data/medical_conversations.csv')
except FileNotFoundError as e:
    raise FileNotFoundError(f"Error loading dataset: {str(e)}")

# Load the model
try:
    with open('./minidoc.pkl', 'rb') as model_file1:
       minidoc_model = pickle.load(model_file1)
except FileNotFoundError as e:
    raise FileNotFoundError(f"Error loading model: {str(e)}")


# Load datasets with error handling
try:
    madeby_me = pd.read_csv('./data/madeby_me.csv')
    dosage_data = pd.read_csv('./data/dosageByme.csv')
    pregnancy_data = pd.read_csv('./data/pregnentByme.csv')
except FileNotFoundError as e:
    raise FileNotFoundError(f"Error loading dataset: {str(e)}")


try:
    with open('./Model.pkl', 'rb') as model_file:
        disease_model = pickle.load(model_file)
    with open('./tfidf_vectorizer.pkl', 'rb') as vectorizer_file:
        vectorizer = pickle.load(vectorizer_file)

    with open('./dosage.pkl', 'rb') as dosage_model_file:
        dosage_model = pickle.load(dosage_model_file)
    with open('./tfidf_vectorizer1.pkl', 'rb') as dosage_vectorizer_file:
        dosage_vectorizer = pickle.load(dosage_vectorizer_file)

    with open('./pregnent.pkl', 'rb') as pregnancy_model_file:
        pregnancy_model = pickle.load(pregnancy_model_file)
    with open('./tfidf_vectorizer3.pkl', 'rb') as pregnancy_vectorizer_file:
        pregnancy_vectorizer = pickle.load(pregnancy_vectorizer_file)
except FileNotFoundError as e:
    raise FileNotFoundError(f"Error loading model or vectorizer: {str(e)}")

def preprocess_input(generic_name, dosage):
    """Preprocess input data for models."""
    generic_name = str(generic_name).lower().strip()
    dosage_value = ''.join(filter(str.isdigit, str(dosage)))
    try:
        dosage_value = float(dosage_value) if dosage_value else 0.0
    except ValueError:
        dosage_value = 0.0
    return generic_name, dosage_value

@app.route('/predict-disease', methods=['POST'])
def predict_disease():
    """Predict disease based on reconstitution description."""
    data = request.json
    reconstitution_desc = data.get('reconstitution_description')

    if not reconstitution_desc:
        return jsonify({'error': 'reconstitution_description is required'}), 400

    try:
        transformed_input = vectorizer.transform([str(reconstitution_desc)])
        prediction = disease_model.predict(transformed_input)
        generic_name = prediction[0]

        result = madeby_me[madeby_me['generic name'] == generic_name].to_dict(orient='records')

        if not result:
            return jsonify({'error': 'No matching data found for the predicted generic name.'}), 404

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/check-dosage', methods=['POST'])
def check_dosage():
    """Check dosage safety."""
    data = request.json
    generic_name = data.get('generic_name')
    dosage = data.get('dosage')

    if not generic_name or not dosage:
        return jsonify({'error': 'Both generic_name and dosage are required'}), 400

    try:
        generic_name_processed, dosage_value = preprocess_input(generic_name, dosage)
        combined_input = f"{generic_name_processed} {dosage_value}"
        transformed_input = dosage_vectorizer.transform([combined_input])
        prediction = dosage_model.predict(transformed_input)
        predicted_slug = prediction[0]

        result = dosage_data[dosage_data['slug'] == predicted_slug].to_dict(orient='records')

        if not result:
            return jsonify({'warning': 'No exact match found. Please consult with a healthcare professional.'})

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': f'Error processing request: {str(e)}'}), 500

@app.route('/check-pregnancy', methods=['POST'])
def check_pregnancy():
    """Check pregnancy safety."""
    data = request.json
    generic_name = data.get('generic_name')
    dosage = data.get('dosage')

    if not generic_name or not dosage:
        return jsonify({'error': 'Both generic_name and dosage are required'}), 400

    try:
        generic_name_processed, dosage_value = preprocess_input(generic_name, dosage)
        combined_input = f"{generic_name_processed} {dosage_value}"
        transformed_input = pregnancy_vectorizer.transform([combined_input])
        prediction = pregnancy_model.predict(transformed_input)
        predicted_slug = prediction[0]

        result = pregnancy_data[pregnancy_data['slug'] == predicted_slug].to_dict(orient='records')

        if not result:
            return jsonify({'warning': 'No exact match found. Please consult with a healthcare professional.'})

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': f'Error processing request: {str(e)}'}), 500
    
@app.route('/mini-doctor', methods=['POST'])
def predict_mini_doctor():
    """Predict disease based on conversations."""
    data = request.json
    conversations = data.get('conversations')  # Get the conversation input from request

    if not conversations:
        return jsonify({'error': 'conversation is required'}), 400

    try:
        # Ensure the input is in the correct format for the model
        transformed_input = vectorizer.transform([conversations])  # Vectorize the input conversation
        prediction = minidoc_model.predict(transformed_input)  # Predict the disease
        predicted_disease = prediction[0]

        # Retrieve details about the predicted disease from medical_data
        result = medical_data[medical_data['disease'] == predicted_disease].to_dict(orient='records')

        if not result:
            return jsonify({'error': 'No matching data found for the predicted disease.'}), 404

        # Return the predicted disease and its details
        return jsonify({'predicted_disease': predicted_disease, 'details': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
