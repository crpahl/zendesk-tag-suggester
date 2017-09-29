import sys
import json
import sys
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.pipeline import Pipeline

def main():
	news_group = 'blerg.herg'
	communications = sys.argv[0]

	loaded_model = pickle.load(open("model.p", 'rb'))

	x = ['I', "like", "technology"]

	cv = CountVectorizer
	mult_nb = Pipeline([("count_vectorizer", CountVectorizer(analyzer=lambda x: x)), ("multinomial nb", loaded_model)])

	news_group = mult_nb.predict(x)

	print news_group

if __name__ == '__main__':
	main()