ML artifacts in this folder:

- resume_model.pkl: trained model for job role prediction
- vectorizer.pkl: text vectorizer used for feature extraction
- label_encoder.pkl: encodes job labels
- UpdatedResumeDataSet.csv: training dataset (sensitive — do not expose publicly)

Usage:
1. Load vectorizer and model with joblib/pickle
2. Transform input resume text using the vectorizer
3. Predict with the model and decode labels using label_encoder

Note: Keep these artifacts out of public releases if they contain private data.
