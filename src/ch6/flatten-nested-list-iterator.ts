//https://leetcode-cn.com/problems/flatten-nested-list-iterator/
interface NestedInteger {
  isInteger(): boolean
  getInteger(): number | null
  setInteger(value: number): void
  add(elem: NestedInteger): void
  getList(): NestedInteger[]
}

export class NestedIterator {
  private stack: Array<number> = []
  constructor(nestedList: NestedInteger[]) {
    while (nestedList.length) {
      const cur = nestedList.pop()!

      if (cur.isInteger()) {
        this.stack.push(cur.getInteger()!)
      } else {
        const list = cur.getList()!

        for (let i = 0; i < list.length; i++) {
          nestedList.push(list[i])
        }
      }
    }
  }

  hasNext(): boolean {
    return !!this.stack.length
  }

  next(): number {
    return this.stack.pop()!
  }
}
