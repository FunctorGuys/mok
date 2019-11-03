import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import NotFound from '../layout/NotFound';

import Login from '../auth/Login';
import Register from '../auth/Register';
import Recovery from '../auth/Recovery';
import Confirm from '../auth/Confirm';
import Alert from '../layout/Alert';
import AddCourse from '../course/AddCourse';
import AddLink from '../course/AddLink';
import Courses from '../courses/Courses';
import CourseLinks from '../course/CourseLinks';
import Syllabus from '../course/Syllabus';
import PasswordIns from '../auth/PasswordIns';
import NewPass from '../auth/NewPass';
import Contact from '../layout/Contact';
import AdminDashboard from '../dashboard/AdminDashboard';
import Dashbord from '../dashboard/Dashboard';
import Landing from './../layout/Landing';
import ThanksForBuy from './../courses/ThanksForBuy';
import CoursesBySchool from './../courses/CoursesBySchool';
import Policy from './../layout/Policy';
import DisplayShowcase from './../course/DisplayShowcase';
import Showcases from '../courses/Showcases';
import ShowcasesB from '../courses/ShowcasesB';
import ShowcasesC from '../courses/ShowcasesC';
import ShowcasesD from './../courses/ShowcasesD';
import ShowSyllabus from '../course/ShowSyllabus';
import AddShowA from '../course/AddShowA';
import AddShowB from '../course/AddShowB';
import AddShowC from '../course/AddShowC';
import AddShowD from '../course/AddShowD';
import AddLinkToShow from '../course/AddLinkToShow';
import DeleteShowA from '../course/DeleteShowA';
import DeleteShowB from '../course/DeleteShowB';
import DeleteShowC from '../course/DeleteShowC';
import DeleteShowD from '../course/DeleteShowD';
import DeleteShowLink from '../course/DeleteShowLink';
import MessageReceived from '../layout/MessageReceived';
import UpdateShowB from '../course/UpdateShowB';
import UpdateCourse from '../course/UpdateCourse';

const Routes = () => {
  return (
    <section id="content-container" className="container">
      <Alert />
      <Switch>
        <AdminRoute exact path="/admin" component={AdminDashboard} />
        <AdminRoute exact path="/courses/addCourse" component={AddCourse} />
        <AdminRoute exact path="/courses/addShowA" component={AddShowA} />
        <AdminRoute exact path="/courses/addShowB" component={AddShowB} />
        <AdminRoute exact path="/courses/addShowC" component={AddShowC} />
        <AdminRoute exact path="/courses/addShowD" component={AddShowD} />
        <AdminRoute exact path="/courses/deleteShowA" component={DeleteShowA} />
        <AdminRoute exact path="/courses/deleteShowB" component={DeleteShowB} />
        <AdminRoute exact path="/courses/deleteShowC" component={DeleteShowC} />
        <AdminRoute exact path="/courses/deleteShowD" component={DeleteShowD} />
        <AdminRoute exact path="/courses/updateShowB" component={UpdateShowB} />
        <AdminRoute
          exact
          path="/courses/deleteShowLink"
          component={DeleteShowLink}
        />

        <AdminRoute
          exact
          path="/courses/addLinkToShow"
          component={AddLinkToShow}
        />
        <AdminRoute
          exact
          path="/courses/updateCourse"
          component={UpdateCourse}
        />

        <AdminRoute exact path="/courses/addLink" component={AddLink} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/by/:school" component={CoursesBySchool} />
        <Route
          exact
          path="/showcases/by/:school/:idB/:idC/:idD"
          component={ShowcasesD}
        />
        <Route
          exact
          path="/showcases/by/:school/:idB/:idC/:idD/:link"
          component={ShowcasesD}
        />
        <Route
          exact
          path="/showcases/by/:school/:idB/:idC"
          component={ShowcasesC}
        />
        <Route exact path="/showcases/by/:school/:idB" component={ShowcasesB} />
        <Route exact path="/showcases/by/:school" component={Showcases} />
        <Route
          exact
          path="/showsyllabus/:school/:idB/:idC/:idD"
          component={ShowSyllabus}
        />
        <Route exact path="/syllabus/:id" component={Syllabus} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/MessageReceived" component={MessageReceived} />

        <Route exact path="/confirmation/:token" component={Confirm} />
        <Route exact path="/payment" component={Landing} />
        <Route exact path="/courses/:id" component={CourseLinks} />
        <Route exact path="/courses/:id/:link" component={CourseLinks} />
        <Route exact path="/recovery" component={Recovery} />
        <Route exact path="/recovery/:token" component={NewPass} />
        <Route exact path="/passwordIns" component={PasswordIns} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/success" component={ThanksForBuy} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/displayShowcase" component={DisplayShowcase} />

        <PrivateRoute exact path="/dashboard" component={Dashbord} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
