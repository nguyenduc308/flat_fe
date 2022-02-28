import Link from 'next/link';
import { useRouter } from 'next/router';

const Menu = (props) => {
  const menuList = [
    {
      label: 'Work',
      path: '/work'
    },
    {
      label: 'Profile',
      path: '/users/me'
    },
    {
      label: 'Login',
      path: '/auth/login'
    },
    {
      label: 'Register',
      path: '/auth/register'
    },
  ];

  const router = useRouter()
  
  return (
    <nav className="main-menu">
      <ul className="menu-list">
        {
          menuList.map((item) => {
            return <li key={item.path} className={'menu-item' + (router.asPath.indexOf(item.path) > -1 ? ' active' : '')}>
              <Link href={item.path}>
                <a>{item.label}</a>
              </Link>
            </li>
          })
        }
      </ul>
    </nav>
  );
};

export default Menu;
