
import sys
import json
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.pipeline import Pipeline

def main():
	communications = sys.argv[0]

	loaded_model = pickle.load(open("model.p", 'rb'))

	cv = CountVectorizer
	mult_nb = Pipeline([("count_vectorizer", CountVectorizer(analyzer=lambda x: x)), ("multinomial nb", loaded_model)])

	tags = mult_nb.predict(communications)

	json_string = json.dumps(tags)
	print json_string

if __name__ == '__main__':
	main()
