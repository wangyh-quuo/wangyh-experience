/**
 * 链表 头结点head不存数据
 * 头插法 尾插法
 */
class LinkList {
  constructor() {
    this.next = null;
  }
  // 尾插
  append(element) {
    let node = new Node(element);
    let head = this;
    if (!head.next) {
      head.next = node;
    } else {
      while (head.next) {
        head = head.next;
      }
      head.next = node;
    }
  }
  // 头插
  headAppend(element) {
    let node = new Node(element);
    let head = this;
    if (!head.next) {
      head.next = node;
    } else {
      let p = head.next;
      head.next = node;
      node.next = p;
    }
  }
  // 指定位置插入
  insert(position, element) {
    if (position >= 0 && position <= this.size()) {
      let i = 0;
      let p = this;
      while (i <= position) {
        p = p.next;
        i++;
      }
      let node = new Node(element);
      node.next = p.next;
      p.next = node;
    } else {
      throw 'position is not exist';
    }
  }
  // 删除
  remove(element) {
    let pre = this;
    let p = this.next;
    while (p) {
      if (p.element === element) {
        pre.next = p.next;
      }
      pre = p;
      p = p.next;
    }
  }
  // 删除指定某个位置
  removeAt(position) {
    if (position >= 0 && position <= this.size()) {
      let i = 0;
      let p = this,
        pre = this;
      while (i <= position) {
        pre = p;
        p = p.next;
        i++;
      }
      pre.next = p.next;
    } else {
      throw 'position is not exist';
    }
  }
  // 获取当前节点的位置
  indexOf(element) {
    let p = this.next;
    let index = -1;
    let isExist = false;
    while (p) {
      index++;
      if (p.element === element) {
        isExist = true;
        break;
      }
      p = p.next;
    }
    return isExist ? index : -1;
  }
  // 获取链表的长度
  size() {
    let length = 0;
    let linkNode = this;
    while (linkNode.next) {
      linkNode = linkNode.next;
      ++length;
    }
    return length;
  }
  // 是否为空
  isEmpty() {}
  toString() {
    let node = this.next;
    let str = '';
    while (node) {
      str += `${node.element}->`;
      node = node.next;
    }
    return str;
  }
}

class Node extends LinkList {
  constructor(element) {
    super();
    this.element = element;
  }
}

let list = new LinkList();
for (let i = 0; i < 5; i++) {
  list.append(i);
  list.headAppend(i);
}
console.log("创建的链表",list.toString());
list.insert(0, 200);
console.log("0索引插入200",list.toString());
list.remove(4);
console.log("删除值为4的节点",list.toString());
list.removeAt(4);
console.log("删除索引为4的节点",list.toString());
console.log('4的位置', list.indexOf(4));
