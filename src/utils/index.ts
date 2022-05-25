export function arrToTree(arr, parentId?: number) {
  // 判断是否是顶层节点，如果是就返回。不是的话就判断是不是自己要找的子节点
  const filterArr = arr.filter((item) => {
    return parentId === undefined
      ? item.parentId === 0
      : item.parentId === parentId;
  });

  // 进行递归调用把子节点加到父节点的 childNode里面去
  filterArr.map((item) => {
    item.children = arrToTree(arr, item.id);
    return item;
  });

  return filterArr;
}
