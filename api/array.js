
// 讲两个数组转换为一个对象数组
let a = ['61bc7c07bc9a160001b59b48', '61a75e7ad1836400018e7b14', '61beeb46bc9a160001b6a1c5']
let b = ['测试新建平级', '啊倒萨大苏打1', '建个子级试试']
let result = []
const res = ([x,...xs],[y,...ys]) => {
    if (x ===undefined || y === undefined) 
      return []
    else 
      return[[x,y],...res(xs,ys)]
}
result  = res(a,b).map(([_id,name]) => ({_id,name}));
console.log(result)