import csv

data = open("problematic_phrases.csv", "r")
output = open("yikes.train", "w")
reader = csv.DictReader(data, fieldnames=["theme", "text"])

# TODO: create 80-20 train/test split

for row in reader:
  output.write("__label__{} {}\n".format(row["theme"].replace(' ', '_'), row["text"].lower().strip(",.?")))
