/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `EmployeeController.create()`
   */
  create: function (req, res) {
    Employee.create(req.params.all(),function(err,done){
      if (err) {
        return res.send(err,500);
      }
      res.json(done);
    });
  },


  /**
   * `EmployeeController.show()`
   */
  show: function (req, res) {
    Employee.findOne(req.param('id'),function(err,show){
      if (err) {
        return res.send(err,500);
      }
      res.json(show);
    });
  },


  /**
   * `EmployeeController.update()`
   */
  update: function (req, res) {
   Employee.update(req.param('id'),req.params.all(),function(err,updated){
    if (err) {
      return res.send(err,500);
    }
    res.json(updated);
   });
  },


  /**
   * `EmployeeController.destroy()`
   */
  destroy: function (req, res) {
    Employee.destroy(req.param('id'),function(err,deleted){
      if (err) {
        return res.send(err,500);
      }
      res.json("deleted");
    });
  }
};

