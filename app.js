var worldAABB = new b2AABB();
worldAABB.minVertex.Set(-1000, -1000);
worldAABB.maxVertex.Set(1000, 1000);
var gravity = new b2Vec2(0, 300);
var doSleep = true;
var world = new b2World(worldAABB, gravity, doSleep);

var circleSd = new b2CircleDef();
circleSd.density = 1.0;
circleSd.radius = 20;
circleSd.restitution = 1.0;
circleSd.friction = 0;
var circleBd = new b2BodyDef();
circleBd.AddShape(circleSd);
circleBd.position.Set(x,y);
var circleBody = world.CreateBody(circleBd);

var jointDef = new b2RevoluteJointDef();
jointDef.anchorPoint.Set(250, 200);
jointDef.body1 = world.GetGroundBody();
jointDef.body2 = circleBody;
world.CreateJoint(jointDef);

world.Step();