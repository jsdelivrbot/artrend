var THREE = require('three');
var assert = require("assert");

var newObj = new THREE.Mesh(new THREE.BoxBufferGeometry(1,1,1), new THREE.MeshStandardMaterial({color: 0xffffff}));
newObj.name = 'Дима хуй';

describe('Хуй ли Дима?', function() {
    it('Да', function() {
        assert.equal('Дима хуй', newObj.name);
    })

        // it('should be able to construct a Vector3 with default of x=0', function() {
        //     var vec3 = new THREE.Vector3();
        //     assert.equal(0, vec3.x);
        // })
});