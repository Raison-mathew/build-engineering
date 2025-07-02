import { Header, 
        HeaderName, 
        HeaderNavigation, 
        HeaderMenuItem, 
        HeaderGlobalBar, 
        HeaderGlobalAction } from '@carbon/react';


const AppHeader = () => {
    return (
        <Header aria-label="Build Engineering">
            <HeaderName prefix='IBM'>
                Build Engineering
            </HeaderName>
            <HeaderNavigation>
                <HeaderMenuItem>
                    Home
                </HeaderMenuItem>
                <HeaderMenuItem>
                    Notification
                </HeaderMenuItem>
                <HeaderMenuItem>
                    Docs
                </HeaderMenuItem>
            </HeaderNavigation>
            
        </Header>
    )
}

export default AppHeader;
