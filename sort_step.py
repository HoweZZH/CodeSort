from operator import itemgetter

file_path = '/Users/zizhao/z_github/CodeSort/target_step.js'
new_file = '/Users/zizhao/z_github/CodeSort/target_step_sorted.js'

# put all step definition into new_code
new_code = []
with open(file_path, 'r') as f:
    lines = f.readlines()
    current_i = 0
    for i, line in enumerate(lines):
        if i < current_i:
            continue
        
        current_i = i
        if line.strip().startswith('Then') or line.strip().startswith('When'):
            code_block = []
            # put all lines of current code block into code_block 
            # get all parentheses from current code block
            stack = []
            while True:
                current_line = lines[current_i]
                for c in current_line.strip():
                    if c == '(':
                        stack.append(c)
                    elif c == ')':
                        if stack[-1] != '(':
                            raise 'Syntax not correct!'
                        elif stack[-1] == '(':
                            stack.pop()
                
                # put current line into code block after process
                code_block.append(current_line)

                current_i += 1

                # process next line
                if len(stack) != 0:
                    continue
                # done with current code block
                else:
                    break

            # done with current code_block, put it into new_code
            new_code.append(code_block)

# get the lines that before the step definition
code_header = []
with open(file_path, 'r') as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if line.strip().startswith('Then') or line.strip().startswith('When'):
            break

        code_header.append(line)


# sort code block by first line of every code block(step)
def sort_step(x):
    if x[0].startswith('When('):
        return '.' + x[0]  # add '.' to make it in front
    return x[0]


# itemgetter(0)
new_code = sorted(new_code, key=sort_step)

print(len(new_code))

# write new_code into new file
with open(new_file, 'w') as f:
    for line in code_header:
        f.write(line)

    for code_block in new_code:
        for line in code_block:
            f.write(line)
        
        f.write('\n')


