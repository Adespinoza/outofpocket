import csv


data = open("problematic_text.csv", "r")

output = open("yikes.train", "w")
reader = csv.DictReader(data, fieldnames=["theme", "text"])

# TODO: create 80-20 train/test split

for row in reader:
  for label in row['theme'].split(' | '):
    output.write('__label__{} '.format(label))
  output.write('{}\n'.format(row['text'].lower().strip('(@[A-Za-z0-9]+)|([^0-9A-Za-z])|(\w+:\/\/\S+)')))
