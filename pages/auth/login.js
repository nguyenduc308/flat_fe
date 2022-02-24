import { useEffect, useState } from 'react'

const Login = (props) => {
  const [data, setData] = useState({
      email: '',
      password: ''
  });

  return (<>
    <form>
        <div>
            <input type="text" name="email" value={data.email}/>
        </div>
        <div>
            <input type="password" name="password" value={data.password}/>
        </div>
        <input type="submit"/>
    </form>
  </>)
}

export default Login;
