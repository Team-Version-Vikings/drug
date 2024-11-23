import sys
import json
import pickle
import pandas as pd

# Load the model and dataset
with open('../Model.pkl', 'rb') as f:
    model = pickle.load(f)

data = pd.read_csv('../data/madeby_me.csv')

def predict_disease_search(input_description):
    """
    Predict the generic name and return additional data from the dataset.
    :param input_description: Feature input (reconstitution description)
    :return: Matching row(s) from the dataset
    """
    # Make a prediction
    predicted_generic_name = model.predict([input_description])[0]

    # Filter the dataset for matching rows
    result = data[data['generic_name'] == predicted_generic_name]
    return result.to_dict(orient='records')

if __name__ == "__main__":
    # Get input description from stdin
    input_data = json.loads(sys.stdin.read())
    description = input_data['description']

    # Get prediction
    prediction = predict_disease_search(description)

    # Return the result as JSON
    print(json.dumps(prediction))
