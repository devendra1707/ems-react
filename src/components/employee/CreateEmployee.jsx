import React, { useEffect, useState } from "react";
import { fetchStaffCategoryList } from "../../services/StaffCategoryService";
import { useNavigate } from "react-router-dom";
import { saveEmployee } from "../../services/EmployeeService";
import Base from "../navbar/Base";
import { fetchGenderList } from "../../services/GenderService";
import { fetchDepartmentList } from "../../services/DepartmentService";
import { fetchRegionList } from "../../services/RegionService";
import { fetchAdgList } from "../../services/AdgService";
import { fetchZoneList } from "../../services/ZoneService";
import { fetchCircleList } from "../../services/CircleService";
import { fetchDivisionList } from "../../services/DivisionService";
import { fetchEmployeeGroupList } from "../../services/EmployeeGroupService";
import { fetchDesignationList } from "../../services/DesignationService";
import { fetchPostHeldList } from "../../services/PostHeldService";
import { fetchCadreList } from "../../services/CadreService";
import { fetchSpecialisationList } from "../../services/SpecialisationService";
import { fetchReservationClasificationList } from "../../services/ReservationClasificationService";
import { fetchStationList } from "../../services/StationService";
import { fetchEmployeeStatusList } from "../../services/EmployeeStatusService";
import { fetchPayScaleList } from "../../services/PayScaleService";

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateofBirth: "",
    father_HusbandName: "",
    employeeCode: "",
    currentOffice: "",
    reportingOffice: "",
    doPTBatch: "",
    dateOfJoiningCurrentOffice: "",
    referenceToOrderOfPosting: "",
    additionalCharge: "",
    additionalDuty: "",

    staffCategoryId: "",
    genderId: "",
    departmentId: "",
    regionId: "",
    adgId: "",
    zoneId: "",
    circleId: "",
    divisionId: "",
    employeeGroupId: "",
    designationId: "",
    postHeldId: "",
    cadreId: "",
    specialisationId: "",
    reservationClasificationId: "",
    stationId: "",
    employeeStatusId: "",
    payScaleId: "",
  });

  const [staffCategory, setStaffCategory] = useState([]);
  const [gender, setGender] = useState([]);
  const [department, setDepartment] = useState([]);
  const [region, setRegion] = useState([]);
  const [adg, setAdg] = useState([]);
  const [zone, setZone] = useState([]);
  const [circle, setCircle] = useState([]);
  const [division, setDivision] = useState([]);
  const [employeeGroup, setEmployeeGroup] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [postHeld, setPostHeld] = useState([]);
  const [cadre, setCadre] = useState([]);
  const [specialisation, setSpecialisation] = useState([]);
  const [reservationClasification, setReservationClasification] = useState([]);
  const [station, setStation] = useState([]);
  const [employeeStatus, setEmployeeStatus] = useState([]);
  const [payScale, setPayScale] = useState([]);

  useEffect(() => {
    fetchCadreList()
      .then((data) => {
        setCadre(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Cadre details:", error);
      });
  }, []);
  useEffect(() => {
    fetchSpecialisationList()
      .then((data) => {
        setSpecialisation(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Specialisation details:", error);
      });
  }, []);
  useEffect(() => {
    fetchReservationClasificationList()
      .then((data) => {
        setReservationClasification(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch ReservationClasification details:", error);
      });
  }, []);
  useEffect(() => {
    fetchStationList()
      .then((data) => {
        setStation(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Station details:", error);
      });
  }, []);
  useEffect(() => {
    fetchEmployeeStatusList()
      .then((data) => {
        setEmployeeStatus(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Employee Status details:", error);
      });
  }, []);
  useEffect(() => {
    fetchPayScaleList()
      .then((data) => {
        setPayScale(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Pay Scale details:", error);
      });
  }, []);
  useEffect(() => {
    fetchStaffCategoryList()
      .then((data) => {
        setStaffCategory(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch StaffCategory details:", error);
      });
  }, []);
  useEffect(() => {
    fetchStaffCategoryList()
      .then((data) => {
        setStaffCategory(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch StaffCategory details:", error);
      });
  }, []);
  useEffect(() => {
    fetchStaffCategoryList()
      .then((data) => {
        setStaffCategory(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch StaffCategory details:", error);
      });
  }, []);

  useEffect(() => {
    fetchGenderList()
      .then((data) => {
        setGender(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Gender details:", error);
      });
  }, []);
  useEffect(() => {
    fetchDepartmentList()
      .then((data) => {
        setDepartment(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Department details:", error);
      });
  }, []);
  useEffect(() => {
    fetchRegionList()
      .then((data) => {
        setRegion(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Region details:", error);
      });
  }, []);
  useEffect(() => {
    fetchAdgList()
      .then((data) => {
        setAdg(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Adg details:", error);
      });
  }, []);
  useEffect(() => {
    fetchZoneList()
      .then((data) => {
        setZone(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Zone details:", error);
      });
  }, []);
  useEffect(() => {
    fetchCircleList()
      .then((data) => {
        setCircle(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Circle details:", error);
      });
  }, []);
  useEffect(() => {
    fetchDivisionList()
      .then((data) => {
        setDivision(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Division details:", error);
      });
  }, []);
  useEffect(() => {
    fetchEmployeeGroupList()
      .then((data) => {
        setEmployeeGroup(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch EmployeeGroup details:", error);
      });
  }, []);
  useEffect(() => {
    fetchDesignationList()
      .then((data) => {
        setDesignation(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Designation details:", error);
      });
  }, []);
  useEffect(() => {
    fetchPostHeldList()
      .then((data) => {
        setPostHeld(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Post Held details:", error);
      });
  }, []);

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setEmployee({ ...employee, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveEmployee(employee)
      .then((data) => {
        navigate("/employee");
      })
      .catch((error) => {
        console.log("Failed to Save Employee. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setEmployee({
      firstName: "",
      middleName: "",
      lastName: "",
      dateofBirth: "",
      father_HusbandName: "",
      employeeCode: "",
      currentOffice: "",
      reportingOffice: "",
      doPTBatch: "",
      dateOfJoiningCurrentOffice: "",
      referenceToOrderOfPosting: "",
      additionalCharge: "",
      additionalDuty: "",

      staffCategoryId: "",
      genderId: "",
      departmentId: "",
      regionId: "",
      adgId: "",
      zoneId: "",
      circleId: "",
      divisionId: "",
      employeeGroupId: "",
      designationId: "",
      postHeldId: "",
      cadreId: "",
      specialisationId: "",
      reservationClasificationId: "",
      stationId: "",
      employeeStatusId: "",
      payScaleId: "",
    });
  };
  return (
    <Base>
      {/* {JSON.stringify(specialisation)} */}
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Employee</h3>
            </i>
          </div>
          <form action="" className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  First Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "firstName")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Middle Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "middleName")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Last Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "lastName")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Date of Birth
                </label>
                <input
                  onChange={(e) => fieldChange(e, "dateofBirth")}
                  type="date"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Father/Husband Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "father_HusbandName")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Employee Code
                </label>
                <input
                  onChange={(e) => fieldChange(e, "employeeCode")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Gender
                </label>
                <select
                  onChange={(e) => fieldChange(e, "genderId")}
                  className="form-control"
                  id="staffCategory"
                  value={employee.genderId}
                >
                  <option value="">Select Gender</option>
                  {gender.map((gen) => (
                    <option key={gen.genderId} value={gen.genderId}>
                      {gen.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Department
                </label>
                <select
                  onChange={(e) => fieldChange(e, "departmentId")}
                  className="form-control"
                  id="department"
                  value={employee.departmentId}
                >
                  <option value="">Select Department</option>
                  {department.map((dept) => (
                    <option key={dept.departmentId} value={dept.departmentId}>
                      {dept.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Region
                </label>
                <select
                  onChange={(e) => fieldChange(e, "regionId")}
                  className="form-control"
                  id="staffCategory"
                  value={employee.regionId}
                >
                  <option value="">Select Region</option>
                  {region.map((reg) => (
                    <option key={reg.regionId} value={reg.regionId}>
                      {reg.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  ADG
                </label>
                <select
                  onChange={(e) => fieldChange(e, "adgId")}
                  className="form-control"
                  id="adg"
                  value={employee.adgId}
                >
                  <option value="">Select Adg</option>
                  {adg.map((ad) => (
                    <option key={ad.adgId} value={ad.adgId}>
                      {ad.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Zone
                </label>
                <select
                  onChange={(e) => fieldChange(e, "zoneId")}
                  className="form-control"
                  id="zone"
                  value={employee.zoneId}
                >
                  <option value="">Select Zone</option>
                  {zone.map((zo) => (
                    <option key={zo.zoneId} value={zo.zoneId}>
                      {zo.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Circle
                </label>
                <select
                  onChange={(e) => fieldChange(e, "circleId")}
                  className="form-control"
                  id="circle"
                  value={employee.circleId}
                >
                  <option value="">Select Circle</option>
                  {circle.map((ci) => (
                    <option key={ci.circleId} value={ci.circleId}>
                      {ci.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Division
                </label>
                <select
                  onChange={(e) => fieldChange(e, "divisionId")}
                  className="form-control"
                  id="division"
                  value={employee.divisionId}
                >
                  <option value="">Select Division</option>
                  {division.map((din) => (
                    <option key={din.divisionId} value={din.divisionId}>
                      {din.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Employee Group
                </label>
                <select
                  onChange={(e) => fieldChange(e, "employeeGroupId")}
                  className="form-control"
                  id="staffCategory"
                  value={employee.employeeGroupId}
                >
                  <option value="">Select Employee Group</option>
                  {employeeGroup.map((emp) => (
                    <option
                      key={emp.employeeGroupId}
                      value={emp.employeeGroupId}
                    >
                      {emp.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Staff Category
                </label>
                <select
                  onChange={(e) => fieldChange(e, "staffCategoryId")}
                  className="form-control"
                  id="staffCategory"
                  value={employee.staffCategoryId}
                >
                  <option value="">Select a category</option>
                  {staffCategory.map((category) => (
                    <option
                      key={category.staffCategoryId}
                      value={category.staffCategoryId}
                    >
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Designation
                </label>
                <select
                  onChange={(e) => fieldChange(e, "designationId")}
                  className="form-control"
                  id="designation"
                  value={employee.designationId}
                >
                  <option value="">Select Designation</option>
                  {designation.map((des) => (
                    <option key={des.designationId} value={des.designationId}>
                      {des.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Post Held
                </label>
                <select
                  onChange={(e) => fieldChange(e, "postHeldId")}
                  className="form-control"
                  id="postHeld"
                  value={employee.postHeldId}
                >
                  <option value="">Select Post Held</option>
                  {postHeld.map((ph) => (
                    <option key={ph.postHeldId} value={ph.postHeldId}>
                      {ph.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Cadre
                </label>
                <select
                  onChange={(e) => fieldChange(e, "cadreId")}
                  className="form-control"
                  id="staffCategory"
                  value={employee.cadreId}
                >
                  <option value="">Select Cadre</option>
                  {cadre.map((cd) => (
                    <option key={cd.cadreId} value={cd.cadreId}>
                      {cd.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Specialisation
                </label>
                <select
                  onChange={(e) => fieldChange(e, "specialisationId")}
                  className="form-control"
                  id="specialisation"
                  value={employee.specialisationId}
                >
                  <option value="">Select Specialisation</option>
                  {specialisation.map((sp) => (
                    <option
                      key={sp.specialisationId}
                      value={sp.specialisationId}
                    >
                      {sp.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Reservation Clasification
                </label>
                <select
                  onChange={(e) => fieldChange(e, "reservationClasificationId")}
                  className="form-control"
                  id="reservationClasification"
                  value={employee.reservationClasificationId}
                >
                  <option value="">Select Reservation Clasification</option>
                  {reservationClasification.map((clasification) => (
                    <option
                      key={clasification.reservationClasificationId}
                      value={clasification.reservationClasificationId}
                    >
                      {clasification.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Station
                </label>
                <select
                  onChange={(e) => fieldChange(e, "stationId")}
                  className="form-control"
                  id="station"
                  value={employee.stationId}
                >
                  <option value="">Select Station</option>
                  {station.map((st) => (
                    <option key={st.stationId} value={st.stationId}>
                      {st.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Employee Status
                </label>
                <select
                  onChange={(e) => fieldChange(e, "employeeStatusId")}
                  className="form-control"
                  id="employeeStatus"
                  value={employee.employeeStatusId}
                >
                  <option value="">Select Employee Status</option>
                  {employeeStatus.map((status) => (
                    <option
                      key={status.employeeStatusId}
                      value={status.employeeStatusId}
                    >
                      {status.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Current Office
                </label>
                <input
                  onChange={(e) => fieldChange(e, "currentOffice")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Reporting Office
                </label>
                <input
                  onChange={(e) => fieldChange(e, "reportingOffice")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  DoPT Batch
                </label>
                <input
                  onChange={(e) => fieldChange(e, "doPTBatch")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Pay Scale
                </label>
                <select
                  onChange={(e) => fieldChange(e, "payScaleId")}
                  className="form-control"
                  id="payScale"
                  value={employee.payScaleId}
                >
                  <option value="">Select Pay Scale</option>
                  {payScale.map((sp) => (
                    <option key={sp.payScaleId} value={sp.payScaleId}>
                      {sp.scaleOfPay}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Date Of Joining Current Office
                </label>
                <input
                  onChange={(e) => fieldChange(e, "dateOfJoiningCurrentOffice")}
                  type="date"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Reference To Order Of Posting
                </label>
                <input
                  onChange={(e) => fieldChange(e, "referenceToOrderOfPosting")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Additional Charge
                </label>
                <input
                  onChange={(e) => fieldChange(e, "additionalCharge")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Additional Duty
                </label>
                <input
                  onChange={(e) => fieldChange(e, "additionalDuty")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
            </div>
            <div className="card-body text-center">
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </main>
    </Base>
  );
};

export default CreateEmployee;
