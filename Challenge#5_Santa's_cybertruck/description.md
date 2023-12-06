### Medium

Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

* `.` = Road
* `S` = Santa's Sled
* `*` = Open barrier
* `|` = Closed barrier

Example of a road: `S...|....|.....`

Each unit of time, **the sled moves one position to the right**. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

**All barriers start closed**, but after 5 units of time, they all open **forever**.

**Create a function that simulates the sled's movement** for a given time and **returns an array** of strings representing the state of the road at each unit of time:



```js
const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // (1) initial state
  '.S.|...|..', // (2) sled advances on the road
  '..S|...|..', // (3) sled advances on the road
  '..S|...|..', // (4) sled stops at the barrier
  '..S|...|..', // (5) sled stops at the barrier
  '...S...*..', // (6) barrier opens, sled advances
  '...*S..*..', // (7) sled advances on the road
  '...*.S.*..', // (8) sled advances on the road
  '...*..S*..', // (9) sled advances on the road
  '...*...S..', // (10) passes through the open barrier
]
*/
```

The result is an **array where each element shows the road at each unit of time**.

Take into account that **if the sled is in the same position as a barrier**, then it takes its place in the array.

The elves were **inspired by this [Code Wars challenge](https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/javascript)**.