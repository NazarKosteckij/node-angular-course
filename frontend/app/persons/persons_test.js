'use strict';

describe('myApp.persons module', function() {

  beforeEach(module('myApp.persons'));

  describe('persons controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var personsCtrl = $controller('PersonsCtrl');
      expect(personsCtrl).toBeDefined();
    }));

  });
});