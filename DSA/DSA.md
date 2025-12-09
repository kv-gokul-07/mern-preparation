Two Sum [2, 5, 8, 11, 13] and target = 19

itr1
    comp = 19 - 2 = 17
    {(2, 0)}
itr 2
    comps = 19 - 5 = 14
    {(2, 0), (5, 1)}
itr 3
    comps = 19 - 8 = 11
    {(2, 0), (5, 1), (8, 2)}
itr 3
    comps = 19 - 11 = 8
    {(2, 0), (5, 1), (8, 2), (11, 3)}

    matches current comps in map so return previous comp index and current index
    [2, 3]