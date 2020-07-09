/**
 * 链表
 * 头插法 尾插法
 */
class LinkList {
  constructor() {
    this.next = null;
    this.length = 0;
  }
  // 最后位置插入
  append(element) {
    let node = new Node(element);
    let linkNode = this;
    if (!linkNode.next) {
      linkNode.next = node;
    }else {
      while (linkNode.next) {
        linkNode = linkNode.next;
      }
      linkNode.next = node;
    }
    this.length++;
  }
  // 指定位置插入
  insert(position, element) {}
  // 删除
  remove(element) {}
  // 删除指定某个位置
  removeAt(position) {}
  // 获取当前节点的位置
  indexOf(element) {}
  // 获取链表的长度
  size() {
    return this.length;
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
}
console.log(JSON.stringify(list));
console.log(list.toString());
console.log('list length:', list.size())