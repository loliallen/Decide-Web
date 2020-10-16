
// create function
export default () => {
    
    const foo = () => {
        // do foo something
        console.log('foo')
    }

    const bar = () => {
        // do bar something
        console.log('bar')
    }

    setTimeout(()=>{
        bar()
    }, 200)

    foo()

}