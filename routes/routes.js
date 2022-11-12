const express = require('express')
const { franchiseeEnqueryPost, deleteFranchiseeById, getAllFranchisee, getByIdFranchiseeEnquery, updateFranchiseeEnquery } = require('../controller/franchiseeController')
const { studentEnqueryPost, studentsGetAll, studentGetById, updateStudentById, deleteStudentById } = require('../controller/studentsEnqueryController')
const { subscribePost, subscribeGetById, subscriberDeleteById, getAllSubscriber } = require('../controller/subscriberController')


const router = express.Router()

// STUDENT ENQUERY Routes////////////////////
router.post('/studentEnquery', studentEnqueryPost)          //Post Student API 
router.get('/students', studentsGetAll)                     //Get All Students API
router.get('/student/:id', studentGetById)                  //Get By Id Student API
router.patch('/updateStudent/:id', updateStudentById)       //Update by ID Method
router.delete('/deleteStudent/:id', deleteStudentById)      //Delete by ID Methods

// Franchisee Enquery Routes
router.post('/franchiseeEnquery', franchiseeEnqueryPost)                            //Post
router.get('/franchiseeEnqueries', getAllFranchisee)                            //Get
router.get('/franchiseeEnquery/:id', getByIdFranchiseeEnquery)                  //Get By Id
router.patch('/franchiseeUpdate/:id', updateFranchiseeEnquery)                  //Update
router.delete('/deleteFranchisee/:id', deleteFranchiseeById)                    //delete



// Subscriber Routes
router.post('/subscribe', subscribePost)
router.get('/subscribers', getAllSubscriber)                            //Post Subscribe API 
router.get('/subscribe/:id', subscribeGetById)                      //Get By Id Subscribe API
router.delete('/deleteSubscriber/:id', subscriberDeleteById)        //Subscriber delete By Id API




module.exports = router