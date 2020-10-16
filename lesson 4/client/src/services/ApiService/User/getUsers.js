
export default () => fetch('/api/users')
        .then(res => res.json())
