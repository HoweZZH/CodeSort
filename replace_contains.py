from operator import itemgetter

file_path = '/Users/zizhao/z_github/CodeSort/DataImportFromDatabase.js'
new_file = file_path[:-2] + 'fix_contains.js'

# process lines in [start_line, end_line]


def process_line(line, start_i):
    # get the start end end index for "contains(@class, *)"
    start_index = line.find('contains(@class,', start_i)
    end_index = line.find(')', start_index)

    # print(line[start_index: end_index + 1])

    # get the classes inside "contains(@class, *)"
    classes = line[start_index + len('contains(@class,'): end_index].strip().strip("'").split()

    # create the "contains(@class, *) and contains(@class, *) ..."
    new_anded_classes = ' and '.join(["contains(@class, '{}')".format(x) for x in classes])

    print(new_anded_classes)

    # replace the old "contains(@class, *)" with newly created "contains(@class, *) and contains(@class, *) ..."
    processed = list(line)

    processed[start_index: end_index + 1] = new_anded_classes

    return ''.join(processed)

# put all page definition into new_code
new_code = []
with open(file_path, 'r') as f:

    for line in f:
        new_line = line

        # find first index of 'contains(@class,'
        start_i = line.find('contains(@class,', 0)

        # process current line when necessary
        while start_i != -1:
            new_line = process_line(new_line, start_i)

            # find next 'contains(@class,'
            start_i = new_line.find('contains(@class,', start_i + len('contains(@class,'))

        # append it to new_code anyway
        new_code.append(new_line)


# new_code = []
# with open(file_path, 'rb') as f:
#     for line in f:
#         new_code.append(line)

# write new_code into new file
with open(new_file, 'w') as f:
    for line in new_code:
            f.write(line)























