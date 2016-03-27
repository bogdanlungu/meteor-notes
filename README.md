meteorNotes is an application helpful for making personal notes and save them in categories.
<br>Author: Bogdan Lungu

<br>Installation:
<br>1) Create a new meteor project
<br>2) Remove all the existing files in the project folder except .meteor
<br>3) Create a folder called 'packages'
<br>4) Clone in the 'packages' folder the repositories: meteor-notes, meteor-notes-contributions and meteor-notes-errors  
<br>5) Run the commands 'meteor add bogdanlungu:meteor-notes-errors', 'meteor add bogdanlungu:meteor-notes-contributions' and 'meteor add bogdanlungu:meteor-notes'
<br>4) Remove autopublish package with the command 'meteor remove autopublish'

<br>The application is running at this address: <a href="http://mynotes.work" target="blank">http://mynotes.work</a>

<br><br>In case you need it, below you have the content of the files "packages" and "versions" which are located in the .meteor folder:
<br><br>packages:
<br>-----------------------Copy below this line------------------------------------------------------------
# Meteor packages used by this project, one per line.
# Check this file (and the other files in this directory) into your repository.
#
# 'meteor add' and 'meteor remove' will edit this file for you,
# but you can also edit it by hand.

meteor-base             # Packages every Meteor app needs to have
mobile-experience       # Packages for a great mobile UX
mongo                   # The database Meteor supports right now
blaze-html-templates    # Compile .html files into Meteor Blaze views
session                 # Client-side reactive dictionary for your app
jquery                  # Helpful client-side library
tracker                 # Meteor's client-side reactive programming library

standard-minifiers      # JS/CSS minifiers run for production mode
es5-shim                # ECMAScript 5 compatibility for older browsers.
ecmascript              # Enable ECMAScript2015+ syntax in app code

insecure                # Allow all DB writes from clients (for prototyping)
bogdanlungu:meteor-notes
<br>-----------------------Copy above this line------------------------------------------------------------
<br><br>versions:
<br>-----------------------Copy below this line------------------------------------------------------------
accounts-base@1.2.1
accounts-password@1.1.3
anti:i18n@0.4.3
autoupdate@1.2.3
babel-compiler@5.8.24_1
babel-runtime@0.1.4
base64@1.0.4
binary-heap@1.0.4
blaze@2.1.3
blaze-html-templates@1.0.1
blaze-tools@1.0.4
bogdanlungu:meteor-notes@1.0.0
bogdanlungu:meteor-notes-contributions@0.0.1
bogdanlungu:meteor-notes-errors@0.0.1
boilerplate-generator@1.0.4
caching-compiler@1.0.0
caching-html-compiler@1.0.2
callback-hook@1.0.4
check@1.0.6
coffeescript@1.0.10
ddp@1.2.2
ddp-client@1.2.1
ddp-common@1.2.1
ddp-rate-limiter@1.0.0
ddp-server@1.2.1
deps@1.0.9
diff-sequence@1.0.1
ecmascript@0.1.5
ecmascript-collections@0.1.6
ejson@1.0.7
email@1.0.7
es5-shim@4.1.13
fastclick@1.0.7
fortawesome:fontawesome@4.2.0_2
geojson-utils@1.0.4
hot-code-push@1.0.0
html-tools@1.0.5
htmljs@1.0.5
http@1.1.1
ian:accounts-ui-bootstrap-3@1.2.83
id-map@1.0.4
insecure@1.0.4
iron:controller@1.0.12
iron:core@1.0.11
iron:dynamic-template@1.0.12
iron:layout@1.0.12
iron:location@1.0.11
iron:middleware-stack@1.0.11
iron:router@1.0.12
iron:url@1.0.11
jquery@1.11.4
launch-screen@1.0.4
less@2.5.0_3
livedata@1.0.15
localstorage@1.0.5
logging@1.0.8
meteor@1.1.9
meteor-base@1.0.1
meteorhacks:fast-render@1.2.0
minifiers@1.1.7
minimongo@1.0.10
mobile-experience@1.0.1
mobile-status-bar@1.0.6
mongo@1.1.2
mongo-id@1.0.1
mongo-livedata@1.0.9
multiply:iron-router-progress@1.0.2
npm-bcrypt@0.7.8_2
npm-mongo@1.4.39_1
observe-sequence@1.0.7
okgrow:analytics@1.0.4
ordered-dict@1.0.4
peppelg:bootstrap-3-modal@1.0.3
promise@0.5.0
random@1.0.4
rate-limit@1.0.0
reactive-dict@1.1.2
reactive-var@1.0.6
reload@1.1.4
retry@1.0.4
routepolicy@1.0.6
sacha:spin@0.1.6
service-configuration@1.0.5
session@1.1.1
sha@1.0.4
spacebars@1.0.7
spacebars-compiler@1.0.7
srp@1.0.4
standard-minifiers@1.0.1
stylus@2.511.0_2
summernote:summernote@0.5.10
templating@1.1.4
templating-tools@1.0.0
timmyg:wow@1.0.1
tracker@1.0.9
twbs:bootstrap@3.3.5
ui@1.0.8
underscore@1.0.4
url@1.0.5
webapp@1.2.2
webapp-hashing@1.0.5
<br>-----------------------Copy above this line------------------------------------------------------------
