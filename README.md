# rbt-solidity

<p align="center">
<img src="https://user-images.githubusercontent.com/12106540/29994000-3d005684-8fce-11e7-97ea-a16a6c607a3f.png" />
</p>

**Red-black tree implementation in Solidity**

Red-black binary search tree (BST) data structure implemented as a library written in Solidity language (Ethereum).

This library is referenced by the ATLANT decentralized exchange (ADEX) contract. 
ADEX use case: order book data structure (sorted by price).

RB tree is a kind of self-balancing binary search tree. 
Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or black) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions.

## Algorithmic complexity
* Search **O(log n)**
* Insertion **O(log n)**
* Removal **O(log n)**

RB tree offers worst-case guarantees for insertion time, deletion time, and search time (O(log n)).

Published under MIT license.
