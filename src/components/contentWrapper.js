import TopBar from './topBar'
import Footer from './footer'
import ContentRowTop from './contentRowTop';

function ContentWrapper() {
    return (

        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar/>
                <ContentRowTop/>
                <Footer/>

            </div>
        </div>
    );
}

export default ContentWrapper;