import '@src/styles/globals.css';

import SideNavBar from '@src/components/sideNavBar/nav';
import TopBar from '@src/components/TopBar/topBar';

export const metadata = {
    title: "Minecraft",
    description: "Dashboard for a mc server"
};

const styles = {
    app_container: 'flex flex-col min-h-screen text-left overflow-hidden',
    main_container: 'flex flex-1 flex-row pt-14 min-h-screen'
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
          <main className='block'>
            <div className={styles.app_container}>
                <TopBar/>
                <div className={styles.main_container}>
                  <SideNavBar/>
                  {children}
                </div>
            </div>
          </main>
        </body>
    </html>
  )
}

export default RootLayout;