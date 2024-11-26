import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import AdgDetails from "./components/adg/AdgDetails.jsx";
import GenderDetails from "./components/gender/GenderDetails.jsx";
import ZoneDetails from "./components/zone/ZoneDetails.jsx";
import StationDetails from "./components/station/StationDetails.jsx";
import StateDetails from "./components/state/StateDetails.jsx";
import StaffCategoryDetails from "./components/staff-category/StaffCategoryDetails.jsx";
import ReservationClassificationDetails from "./components/reservation-clasification/ReservationClassificationDetails.jsx";
import SpecialisationDetails from "./components/specialisation/SpecialisationDetails.jsx";
import RegionDetails from "./components/region/RegionDetails.jsx";
import PostHeldDetails from "./components/post-held/PostHeldDetails.jsx";
import PayScaleDetails from "./components/pay-scale/PayScaleDetails.jsx";
import EmployeeStatusDetails from "./components/employee-status/EmployeeStatusDetails.jsx";
import EmployeeGroupDetails from "./components/employee-group/EmployeeGroupDetails.jsx";
import DivisionDetails from "./components/division/DivisionDetails.jsx";
import DesignationDetails from "./components/designation/DesignationDetails.jsx";
import DepartmentDetails from "./components/department/DepartmentDetails.jsx";
import CircleDetails from "./components/circle/CircleDetails.jsx";
import CadreDetails from "./components/cadre/CadreDetails.jsx";
import CreateGender from "./components/gender/CreateGender.jsx";
import UpdateGender from "./components/gender/UpdateGender.jsx";
import CreateAdg from "./components/adg/CreateAdg.jsx";
import UpdateAdg from "./components/adg/UpdateAdg.jsx";
import CreateCadre from "./components/cadre/CreateCadre.jsx";
import UpdateCadre from "./components/cadre/UpdateCadre.jsx";
import CreateCircle from "./components/circle/CreateCircle.jsx";
import UpdateCircle from "./components/circle/UpdateCircle.jsx";
import CreateDepartment from "./components/department/CreateDepartment.jsx";
import UpdateDepartment from "./components/department/UpdateDepartment.jsx";
import UpdateDesignation from "./components/designation/UpdateDesignation.jsx";
import CreateDivision from "./components/division/CreateDivision.jsx";
import UpdateDivision from "./components/division/UpdateDivision.jsx";
import CreateEmployeeGroup from "./components/employee-group/CreateEmployeeGroup.jsx";
import UpdateEmployeeGroup from "./components/employee-group/UpdateEmployeeGroup.jsx";
import CreatePayScale from "./components/pay-scale/CreatePayScale.jsx";
import UpdatePayScale from "./components/pay-scale/UpdatePayScale.jsx";
import CreatePostHeld from "./components/post-held/CreatePostHeld.jsx";
import UpdatePostHeld from "./components/post-held/UpdatePostHeld.jsx";
import CreateRegion from "./components/region/CreateRegion.jsx";
import UpdateRegion from "./components/region/UpdateRegion.jsx";
import CreateReservationClassification from "./components/reservation-clasification/CreateReservationClassification.jsx";
import UpdateReservationClassification from "./components/reservation-clasification/UpdateReservationClassification.jsx";
import UpdateSpecialisation from "./components/specialisation/UpdateSpecialisation.jsx";
import CreateSpecialisation from "./components/specialisation/CreateSpecialisation.jsx";
import CreateStaffCategory from "./components/staff-category/CreateStaffCategory.jsx";
import UpdateStaffCategory from "./components/staff-category/UpdateStaffCategory.jsx";
import CreateState from "./components/state/CreateState.jsx";
import UpdateState from "./components/state/UpdateState.jsx";
import CreateStation from "./components/station/CreateStation.jsx";
import UpdateStation from "./components/station/UpdateStation.jsx";
import CreateZone from "./components/zone/CreateZone.jsx";
import UpdateZone from "./components/zone/UpdateZone.jsx";
import CreateEmployeeStatus from "./components/employee-status/CreateEmployeeStatus.jsx";
import UpdateEmployeeStatus from "./components/employee-status/UpdateEmployeeStatus.jsx";
import CreateDesignation from "./components/designation/CreateDesignation.jsx";
import EmployeeDetails from "./components/employee/EmployeeDetails.jsx";
import CreateEmployee from "./components/employee/CreateEmployee.jsx";
import UpdateEmployee from "./components/employee/UpdateEmployee.jsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <ToastContainer position="bottom-center" theme="dark" />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/employee" element={<EmployeeDetails />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/edit-employee/:employeeId" element={<UpdateEmployee />} />

        <Route path="/gender" element={<GenderDetails />} />
        <Route path="/create-gender" element={<CreateGender />} />
        <Route path="/edit-gender/:genderId" element={<UpdateGender />} />

        <Route path="/adg" element={<AdgDetails />} />
        <Route path="/create-adg" element={<CreateAdg />} />
        <Route path="/edit-adg/:adgId" element={<UpdateAdg />} />

        <Route path="/cadre" element={<CadreDetails />} />
        <Route path="/create-cadre" element={<CreateCadre />} />
        <Route path="/edit-cadre/:cadreId" element={<UpdateCadre />} />

        <Route path="/circle" element={<CircleDetails />} />
        <Route path="/create-circle" element={<CreateCircle />} />
        <Route path="/edit-circle/:circleId" element={<UpdateCircle />} />

        <Route path="/department" element={<DepartmentDetails />} />
        <Route path="/create-department" element={<CreateDepartment />} />
        <Route
          path="/edit-department/:departmentId"
          element={<UpdateDepartment />}
        />

        <Route path="/designation" element={<DesignationDetails />} />
        <Route path="/create-designation" element={<CreateDesignation />} />
        <Route
          path="/edit-designation/:designationId"
          element={<UpdateDesignation />}
        />

        <Route path="/division" element={<DivisionDetails />} />
        <Route path="/create-division" element={<CreateDivision />} />
        <Route path="/edit-division/:divisionId" element={<UpdateDivision />} />

        <Route path="/employee-group" element={<EmployeeGroupDetails />} />
        <Route
          path="/create-employee-group"
          element={<CreateEmployeeGroup />}
        />
        <Route
          path="/edit-employee-group/:employeeGroupId"
          element={<UpdateEmployeeGroup />}
        />

        <Route path="/employee-status" element={<EmployeeStatusDetails />} />
        <Route
          path="/create-employee-status"
          element={<CreateEmployeeStatus />}
        />
        <Route
          path="/edit-employee-status/:employeeStatusId"
          element={<UpdateEmployeeStatus />}
        />

        <Route path="/pay-scale" element={<PayScaleDetails />} />
        <Route path="/create-pay-scale" element={<CreatePayScale />} />
        <Route
          path="/edit-pay-scale/:payScaleId"
          element={<UpdatePayScale />}
        />

        <Route path="/post-held" element={<PostHeldDetails />} />
        <Route path="/create-postHeld" element={<CreatePostHeld />} />
        <Route path="/edit-postHeld/:postHeldId" element={<UpdatePostHeld />} />

        <Route path="/region" element={<RegionDetails />} />
        <Route path="/create-region" element={<CreateRegion />} />
        <Route path="/edit-region/:regionId" element={<UpdateRegion />} />

        <Route
          path="/reservation-clasification"
          element={<ReservationClassificationDetails />}
        />
        <Route
          path="/create-reservation-clasification"
          element={<CreateReservationClassification />}
        />
        <Route
          path="/edit-reservation-clasification/:reservationClasificationId"
          element={<UpdateReservationClassification />}
        />

        <Route path="/specialisation" element={<SpecialisationDetails />} />
        <Route
          path="/create-specialisation"
          element={<CreateSpecialisation />}
        />
        <Route
          path="/edit-specialisation/:specialisationId"
          element={<UpdateSpecialisation />}
        />

        <Route path="/staff-category" element={<StaffCategoryDetails />} />
        <Route
          path="/create-staff-category"
          element={<CreateStaffCategory />}
        />
        <Route
          path="/edit-staff-category/:staffCategoryId"
          element={<UpdateStaffCategory />}
        />

        <Route path="/state" element={<StateDetails />} />
        <Route path="/create-state" element={<CreateState />} />
        <Route path="/edit-state/:stateId" element={<UpdateState />} />

        <Route path="/station" element={<StationDetails />} />
        <Route path="/create-station" element={<CreateStation />} />
        <Route path="/edit-station/:stationId" element={<UpdateStation />} />

        <Route path="/zone" element={<ZoneDetails />} />
        <Route path="/create-zone" element={<CreateZone />} />
        <Route path="/edit-zone/:zoneId" element={<UpdateZone />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
