//wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => {
            if(prop in obj){
                return obj[prop]
            }else return defaultValue
        }
    })
}


const position = withDefaultValue({
    x: 24,
    y: 42
    },0
)

//hidden properies
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver)
            ? obj[prop]
            : void 0
    })
}

const data = withHiddenProps({
    name: 'Denis',
    age: 25,
    _uid: '123123'
})

//optimizations
const userData = [
    {id: 1, name: 'Denis', job: 'fullstack', age: 25},
    {id: 2, name: 'De', job: 'fullsk', age: 22},
    {id: 3, name: 'Des', job: 'flstack', age: 21},
    {id: 4, name: 'nis', job: 'futack', age: 14}
]

const IndexedArray = new Proxy(Array,{
    construct(target, [argArray], newTarget) {
        const index = {}
        argArray.forEach(item => index[item.id] = item)
        console.log(index)
        return new Proxy(new target(...argArray),{
            get(arr, prop){
                switch (prop) {
                    case 'push': return item => {
                        index[item.id] = item
                        arr[prop].call(arr, item)
                    }
                    case 'findById': return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray(userData)