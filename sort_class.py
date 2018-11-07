from operator import itemgetter

file_path = '/Users/zizhao/z_github/CodeSort/target_page.js'
new_file = '/Users/zizhao/z_github/CodeSort/new_page.js'

# process lines in [start_line, end_line]

# put all page definition into new_code
new_code = []
with open(file_path, 'r') as f:
    lines = f.readlines()

    current_i = 0
    for i, line in enumerate(lines):
        if i < current_i:
            continue

        current_i = i
        if line.strip().startswith('/**'):

            code_block = []
            # put all lines of current code block into code_block
            # get all parentheses from current code block
            stack = []
            while current_i < len(lines):
                current_line = lines[current_i]

                # add the comment to code block
                while current_line.strip().startswith('*') or current_line.strip().startswith('/*'):
                    code_block.append(current_line)
                    current_i += 1
                    current_line = lines[current_i]

                for c in current_line.strip():
                    if c == '{':
                        stack.append(c)
                    elif c == '}':
                        if len(stack) == 0:
                            raise Exception('Syntax not correct!')

                        elif len(stack) != 0 and stack[-1] != '{':
                            raise Exception('Syntax not correct!')

                        elif stack[-1] == '{':
                            stack.pop()

                # put current line into code block after process
                code_block.append(current_line)
                current_i += 1
                # done with current code block
                if len(stack) == 0:
                    break

            # done with current code_block, put it into new_code
            new_code.append(code_block)

print(len(new_code))

call_me = [0]


def first_code_line(x):
    call_me[0] += 1
    print('call me ' + str(call_me[0]))
    for line in x:
        if len(line) == 0:
            pass
        elif '*' not in line:
            return line


# sort code block by line containing funciton signiture
new_code = sorted(new_code, key=first_code_line)

# write new_code into new file
with open(new_file, 'w') as f:
    for code_block in new_code:
        for line in code_block:
            f.write(line)

        f.write('\n')
