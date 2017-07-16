#
# This Makefile makes it easier to run our model.
# 
# Simply running `make` will generate the model based on the
# input from `problematic_phrases.csv`.
#
# `make play` allows you to play around with the model.
# Enter some phrase and our model will try to predict how
# to label it.
#
# `make server` runs the server
#

all:
	python preprocess.py
	./fasttext supervised -lr 0.001 -input yikes.train -output out_of_pocket


play:
	./fasttext predict-prob out_of_pocket.bin - 12

server:
	python3 server.py

clean:
	rm -rf *.bin *.train *.test
