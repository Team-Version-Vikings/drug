import sys
import json
import pickle
import pandas as pd

# Load the model and dataset
with open('../dosage.pkl', 'rb') as f:
    model = pickle.load(f)

data = pd.read_csv('../data/dosageByme.csv')

def predict_dosage_safety(input_generic_name, input_dosage):
    """
    Predict the slug and return additional data from the dataset.
    :param input_generic_name: Feature 1
    :param input_dosage: Feature 2
    :return: Matching row(s) from the dataset
    """
    # Make a prediction
    predicted_slug = model.predict([[input_generic_name, input_dosage]])[0]

    # Filter the dataset for matching rows
    result = data[data['slug'] == predicted_slug]
    return result.to_dict(orient='records')

if __name__ == "__main__":
    # Get input data from stdin
    input_data = json.loads(sys.stdin.read())
    generic_name = input_data['generic_name']
    dosage = input_data['dosage']

    # Get prediction
    prediction = predict_dosage_safety(generic_name, dosage)

    # Return the result as JSON
    print(json.dumps(prediction))
