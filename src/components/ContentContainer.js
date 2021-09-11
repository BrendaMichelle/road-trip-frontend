import { Switch, Route } from "react-router-dom";
import Locations from './Locations';
import PhotoGallery from "./PhotoGallery";

function ContentContainer() {
    return (
        <div id="content-container" className="center">
            <Switch>
                <Route path="/gallery">
                    <PhotoGallery />
                </Route>
                <Route path="/albums">
                    {/* <PhotoGallery /> */}
                </Route>
                <Route path="/locations">
                    <Locations />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default ContentContainer;