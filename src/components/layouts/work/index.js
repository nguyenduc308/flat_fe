import Header from '../default/header';
import Footer from '../default/footer';

function WorkLayout({ children }) {
  return (
    <div className='work-wrapper'>
        <Header></Header>
            <main>
              <aside className='sidebar'>
                sidebar
              </aside>
              <div className='content'>
                {children}
              </div>
            </main>
        <Footer></Footer>
    </div>
  );
}

export default WorkLayout;
