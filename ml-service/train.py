"""
Training script for crop recommendation model.

Expect a CSV with columns: N, P, K, temperature, humidity, ph, rainfall, label

Usage:
  python train.py --data path/to/crop_data.csv --out models/

This script trains a RandomForestClassifier and saves model and label encoder to ml-service/models/
"""
import argparse
import os
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
import joblib


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--data', required=True, help='Path to CSV dataset')
    parser.add_argument('--out', default='models', help='Output directory to save model')
    args = parser.parse_args()

    df = pd.read_csv(args.data)
    expected_cols = ['N','P','K','temperature','humidity','ph','rainfall']
    if not all(c in df.columns for c in expected_cols) or 'label' not in df.columns:
        raise SystemExit('Dataset must contain columns: N,P,K,temperature,humidity,ph,rainfall,label')

    X = df[expected_cols].values
    y = df['label'].values

    le = LabelEncoder()
    y_enc = le.fit_transform(y)

    X_train, X_test, y_train, y_test = train_test_split(X, y_enc, test_size=0.2, random_state=42)

    clf = RandomForestClassifier(n_estimators=100, random_state=42)
    clf.fit(X_train, y_train)

    os.makedirs(args.out, exist_ok=True)
    model_path = os.path.join(args.out, 'crop_model.pkl')
    le_path = os.path.join(args.out, 'label_encoder.pkl')

    joblib.dump(clf, model_path)
    joblib.dump(le, le_path)

    acc = clf.score(X_test, y_test)
    print(f'Trained RandomForest model saved to {model_path}')
    print(f'Label encoder saved to {le_path}')
    print(f'Test accuracy (not a production metric): {acc:.4f}')

if __name__ == '__main__':
    main()
