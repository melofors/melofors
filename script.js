// checkbox: https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
  
// Where you want to render the map.
var element = document.getElementById('map');
  
// Height has to be set. You can do this in CSS too.
element.style = 'height:475px;';
  
// Create Leaflet map on map element.
var map = L.map(element, {
    minZoom: 2,
    maxZoom: 18,
    zoom: 8 //12
});
  
// Set center
map.setView(L.latLng('39.2812', '-76.7156'  )); //'7.793', '80.865' //'39.2812', '-76.7156'
  
// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  
// -----------MARKERS-----------
// set options for marker icons
var LeafIcon = L.Icon.extend({
    options:{
        iconSize:     [20, 32],
        iconAnchor:   [11, 33],
        popupAnchor:  [-1, -33]}});
    LeafIconSmall = L.Icon.extend({
    options:{
        iconSize:     [45, 36],
        iconAnchor:   [22, 32],
        popupAnchor:  [0, -30]}});
// create marker icons
var one = new LeafIconSmall({iconUrl: '../markers/1700s and below.png'});
    two = new LeafIcon({iconUrl: '../markers/1800s early.png'});
    three = new LeafIcon({iconUrl: '../markers/1800s mid.png'});
    four = new LeafIcon({iconUrl: '../markers/1800s late.png'});
    five = new LeafIcon({iconUrl: '../markers/1900s.png'});
    six = new LeafIcon({iconUrl: '../markers/1910s.png'});
    seven = new LeafIcon({iconUrl: '../markers/1920s.png'});
    eight = new LeafIcon({iconUrl: '../markers/1930s.png'});
                      
    // marker 1
    var marker1 = L.marker([39.31054,-76.79221], {
        icon:one}, {tags: ['1700s']})
        .addTo(map)
        .bindPopup("<h3>1781</h3><p>In Charles W. Evan's <i>Biographical Accounts of the Fox, Ellicott and Evans Families</i> (1882), there is a woodcut of Ellicott's Upper Mills, which, according to the author, dates from 1781. Prominently depicted are the mansion, store, and mill.</p><p><b>Source: </b><a href='https://archive.org/details/biographicalhist00evan/page/24/mode/2up' <i>Biographical and historical accounts of the Fox, Ellicott, and Evans families, and the different families connected with them</i></a> (1882), page 25</p><img src='./photos/1.png'>", {
            maxWidth:'auto',className:'1700s'});
  
                      // marker 2
                      var marker2 = L.marker([39.32520,-76.74016], {
                          icon:seven,})
                          .addTo(map)
                          .bindPopup("<h3>1920</h3><p>This photo of Featherbed Lane was featured in an <i>Evening Sun</i> article on October 27, 1920. The exact location of the photo is unknown.</p><p><b>Source: </b> <a href='https://www.newspapers.com/clip/100617651/the-evening-sun/'><i>Featherbed Lane, On Way To Johnnycake Town</i></a>, <i>The Evening Sun</i> (Oct. 27, 1920)</p><img src='./photos/2.png'>", {
                              maxWidth:'auto'});
                      
                      // marker 3   
                      var marker3 = L.marker([39.28107,-76.67347], {
                          icon:two,})
                          .addTo(map)
                          .bindPopup("<h3>c. 1827</h3><p>This c. 1827 watercolor by Thomas Coke Ruckle depicts the Fairview Inn, also known as the Three Mile House, on the Frederick Turnpike. It was torn down in 1920 or 1925.</p><p><b>Source: </b>Enoch Pratt Free Library</p><img src='./photos/3.jpg'>", {
                              maxWidth:'auto'});
  
                      // marker 4
                      var marker4 = L.marker([39.28113,-76.67363], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>c. 1900</h3><p>This photo, thought to be by Thomas Chew Worthington, III around 1900, depicts the Fairview Inn, at the three mile mark of the Frederick Turnpike, before it was torn down about 1920 or 1925. Signs on the doors reveal the building was up for rent at the time of the photograph.</p><p><b>Source:</b> from <a href='https://www.flickr.com/photos/cbustapeck/2296495847/in/photostream/'>Flickr</a>, from Enoch Pratt Free Library, Central Library / State Library Resource Center, Baltimore, Maryland</p><img src='./photos/4.jpg'>", {
                              maxWidth:'auto'});
  
                      // marker 5
                      var marker5 = L.marker([39.288679,-76.730310], {
                          icon:eight,})
                          .addTo(map)
                          .bindPopup("<h3>Unknown date</h3><p>The Ingleside mansion, built in 1889 by Bernard N. Baker and burnt down in 1953.</p><p><b>Source: </b><a href='https://www.newspapers.com/clip/100620943/the-baltimore-sun/'><i>Baltimore's Spreading Suburbs—Into The Setting Sun</i></a>, <i>The Baltimore Sun</i> (Nov. 27, 1932)</p><img src='./photos/6.png'>", {
                              maxWidth:'auto'});
                      // marker 6
                      var marker6 = L.marker([39.399890,-76.605706], {
                          icon:three,})
                          .addTo(map)
                          .bindPopup("<h3>1857</h3><p>This drawing of the old Baltimore County Historic Courthouse was featured in James C. Sidney's map of the county published in 1857.</p><p><b>Source: </b><a href='https://www.loc.gov/resource/g3843b.la000283/?r=0.876,0.025,0.152,0.093,0'><i>Map of the city and county of Baltimore, Maryland.</i></a> (1857)</p><img src='./photos/7.png'>", {
                              maxWidth:'auto'});
                      // marker 7
                      var marker7 = L.marker([39.312525,-76.582439], {
                          icon:three,})
                          .addTo(map)
                          .bindPopup("<h3>1857</h3><p>This drawing of the Baltimore Cemetery was featured in James C. Sidney's map of the county published in 1857.</p><p><b>Source: </b><a href='https://www.loc.gov/resource/g3843b.la000283/?r=0.432,1.197,0.147,0.09,0'><i>Map of the city and county of Baltimore, Maryland.</i></a> (1857)</p><img src='./photos/8.png'>", {
                              maxWidth:'auto'});
                      // marker 8
                      var marker8 = L.marker([39.307089,-76.608699], {
                          icon:three,})
                          .addTo(map)
                          .bindPopup("<h3>1857</h3><p>This drawing of the Green Mount Cemetery was featured in James C. Sidney's map of the county published in 1857.</p><p><b>Source: </b><a href='https://www.loc.gov/resource/g3843b.la000283/?r=0.008,1.195,0.122,0.075,0'><i>Map of the city and county of Baltimore, Maryland.</i></a> (1857)</p><img src='./photos/9.png'>", {
                              maxWidth:'auto'});
                      // marker 9
                      var marker9 = L.marker([39.280480,-76.661089], {
                          icon:eight,})
                          .addTo(map)
                          .bindPopup("<h3>1930</h3><p>This photo of the Frederick Avenue bridge over Gwynn's Falls was taken during its reconstruction in 1930.</p><p><b>Source: </b><a href='https://books.google.com/books?id=r-y4DwAAQBAJ&pg=PA27#v=onepage&q&f=false'><i>The National Road in Maryland</i></a> (2019); from Maryland Department, Enoch Pratt Free Library/Maryland's State Library Resource Center</p><img src='./photos/10.png'>", {
                              maxWidth:'auto'});
                      // marker 10
                      var marker10 = L.marker([39.272082,-76.731475], {
                          icon:four,})
                          .addTo(map)
                          .bindPopup("<h3>c. 1898</h3><p>The Marsden and Owens store at the northwest corner of Frederick Road and Ingleside Avenue, built in the 1830s for Joseph P. Fusting.</p><p><b>Source: </b>from <a href='https://collections.digitalmaryland.org/digital/collection/bpca/id/10/'><i>Old Corner Store</i></a>, Digital Maryland; owned by Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/11.jpg'>", {
                              maxWidth:'auto'});
                      // marker 11
                      var marker11 = L.marker([39.272085,-76.731497], {
                          icon:four,})
                          .addTo(map)
                          .bindPopup("<h3>1898</h3><p>The Old Corner Store at the northwest corner of Frederick Road and Ingleside Avenue, built in the 1830s for Joseph P. Fusting.</p><p><b>Source: </b>from <a href='https://books.google.com/books?id=r-y4DwAAQBAJ&pg=PA29#v=onepage&q&f=false'><i>The National Road in Maryland</i></a> (2019); owned by Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/12.png'>", {
                              maxWidth:'auto'});
                      // marker 12
                      var marker12 = L.marker([39.272124,-76.731202], {
                          icon:six,})
                          .addTo(map)
                          .bindPopup("<h3>c. 1916</h3><p>A view westward of Frederick Road in downtown Catonsville. A streetcar heading towards Baltimore is in view.</p><p><b>Source: </b><a href='https://collections.digitalmaryland.org/digital/collection/bpca/id/5/rec/5'><i>Frederick Road with Streetcar</i></a>, Digital Maryland; owned by Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/13.jpg'>", {
                              maxWidth:'auto'});
                      // marker 13
                      var marker13 = L.marker([39.270911,-76.731071], {
                          icon:six,})
                          .addTo(map)
                          .bindPopup("<h3>c. 1915–1928</h3><p>A postcar depicting the Catonsville Fire Department at 22 Bloomsbury Avenue. Built by William Gerwig, the building served as the fire and police station, jail, and meeting place for the Catonsville Supreme Bench until 1928.</p><p><b>Source: </b><a href='https://collections.digitalmaryland.org/digital/collection/bpca/id/2/rec/2'><i>Catonsville Fire Department</i></a>, Digital Maryland; owned by Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/14.jpg'>", {
                              maxWidth:'auto'});
                      // marker 14
                      var marker14 = L.marker([39.271903,-76.732092], {
                          icon:four,})
                          .addTo(map)
                          .bindPopup("<h3>1895</h3><p>The F.A. Seicke, Jr. Store at 715 Frederick Road in 1895, advertising signs, telephones, gas lighting, and burglar alarms. It was used as a telegraph office for several years in the 1800s before becoming a doctor's office. It was torn down in the 1950s.</p><p><b>Source: </b><a href='https://collections.digitalmaryland.org/digital/collection/bpca/id/11/rec/4'><i>Catonsville Fire Department</i></a>, Digital Maryland; owned by Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/15.png'>", {
                              maxWidth:'auto'});
                      // marker 15
                      var marker15 = L.marker([39.3053,-76.74285], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>Unknown</h3><p>Students and teacher J. Albert Kalb at the Johnnycake School House, a one-room school house built around 1820. It was torn down in 1964 for the construction of the I-70 and I-695 interchange.</p><p><b>Source: </b><a href='https://collections.digitalmaryland.org/digital/collection/bpca/id/7/rec/7'><i>Johnnycake Schoolhouse</i></a>, Digital Maryland; owned by Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/16.jpg'>", {
                              maxWidth:'auto'});
                      // marker 16
                      var marker16 = L.marker([39.271542,-76.733847], {
                          icon:four,})
                          .addTo(map)
                          .bindPopup("<h3>c. 1891–1900</h3><p>The Railroad Hotel at the northeast corner of Frederick Road and Egges Lane. The building was sold to Baltimore County in 1922 and torn down to make way for Catonsville Fire Station 4</p><p><b>Source: </b><a href='https://collections.digitalmaryland.org/digital/collection/bpca/id/6/rec/11'><i>Railroad Hotel</i></a>, Digital Maryland; owned by Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/17.jpg'>", {
                              maxWidth:'auto'});
                      // marker 17
                      var marker17 = L.marker([39.272179,-76.730995], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>before 1909</h3><p>The Remus Adams Blacksmith Shop, owned by the African American free man Remus Adams who took it over from his father. He used the shop to train other free men. It was eventually razed in 1909 to make way for the Catonsville Elementay School.</p><p><b>Source: </b><a href='https://collections.digitalmaryland.org/digital/collection/bpca/id/0/rec/12'><i>Remus Adams Blacksmith Shop</i></a>, Digital Maryland; owned by Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/18.jpg'>", {
                              maxWidth:'auto'});
                      // marker 18
                      var marker18 = L.marker([39.26746134499615, -76.79609384636], {
                          icon:eight,})
                          .addTo(map)
                          .bindPopup("<h3>1930s</h3><p>A view westward of downtown Ellicott City.</p><p><b>Source: </b><a href='https://books.google.com/books?id=r-y4DwAAQBAJ&pg=PA31#v=onepage&q&f=false' src=<i>The National Road in Maryland</i> (2019), from Howard County Historical Society</p><img src='./photos/19.png'>", {
                              maxWidth:'auto'});
                      // marker 19
                      var marker19 = L.marker([39.33630344282619, -77.07134291010983], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>Unknown date</h3><p>The Lisbon Hotel, which served travelers along the Baltimore and Fredericktown Turnpike, later becoming the Drovers Inn, Poole's Country Store, and Lisbon's post office. It stands today abandoned.</p><p><b>Source: </b><a href='https://books.google.com/books?id=r-y4DwAAQBAJ&pg=PA34#v=onepage&q&f=false'><i>The National Road in Maryland</i></a> (2019), from Howard County Historical Society</p><img src='./photos/20.png'>", {
                              maxWidth:'auto'});
                      // marker 20
                      var marker20 = L.marker([39.270375208177285, -76.73945060041824], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>before 1907</h3><p>Castle Thunder, the residence of Richard Caton and an inn for travelers, which stood from 1787 until its destruction in 1907. The site is currently home to the Catonsville Branch of the Baltimore County Public Library.</p><p><b>Source: </b><a href='https://www.newspapers.com/clip/95764358/the-baltimore-sun/'><i>Suburban Baltimore</i></a>, <i>The Baltimore Sun</i> (1905)</p><img src='./photos/21.jpeg'>", {
                              maxWidth:'auto'});
                      // marker 21
                      var marker21 = L.marker([39.28852,-76.73060], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>Unknown date</h3><p>The Ingleside mansion, built in 1889 by Bernard N. Baker and burnt down in 1953.</p><p><b>Source: </b><a href='https://www.newspapers.com/clip/95764358/the-baltimore-sun/'><i>Suburban Baltimore</i></a>, <i>The Baltimore Sun</i> (1905)</p><img src='./photos/22.jpeg'>", {
                              maxWidth:'auto'});
                      // marker 22
                      var marker22 = L.marker([39.41670965764139, -76.58730091618636], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>Unknown date</h3><p>The Hampton Mansion, completed in 1790.</p><p><b>Source: </b><a href='https://www.newspapers.com/clip/65760820/1905-ridgely-fontaine-wedding/'><i>As In Colonial Days</i></a>, <i>The Baltimore Sun</i> (1905)</p><img src='./photos/23.jpeg'>", {
                              maxWidth:'auto'});
                      // marker 23
                      var marker23 = L.marker([39.272682375599125, -76.73601002557362], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>1907</h3><p>Students outside of the old Catonsville High School at 20 Winters Lane. The building still stands today.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/maryland/baltimore-county/catonsville/ph-photos-from-the-past-catonsville-pg-photogallery.html'><i>Photos from the Past: Catonsville</i></a>, <i>The Baltimore Sun</i> (2015); from Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/24.jpg'>", {
                              maxWidth:'auto'});
                      // marker 24
                      var marker24 = L.marker([39.270896521518026, -76.73109960132173], {
                          icon:four,})
                          .addTo(map)
                          .bindPopup("<h3>1884</h3><p>The Catonsville Fire Department at 22 Bloomsbury Avenue. Built by William Gerwig, the building served as the fire and police station, jail, and meeting place for the Catonsville Supreme Bench until 1928.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/maryland/baltimore-county/catonsville/ph-photos-from-the-past-catonsville-pg-photogallery.html'><i>Photos from the Past: Catonsville</i></a>, <i>The Baltimore Sun</i> (2015); from Baltimore County Public Library (Catonsville History Room)</p><img src='./photos/25.jpg'>", {
                              maxWidth:'auto'});
                      // marker 25
                      var marker25 = L.marker([39.297434977539645, -76.61410768828762], {
                          icon:eight,})
                          .addTo(map)
                          .bindPopup("<h3>1937</h3><p>Cars back up on East Mt. Vernon Place at St. Paul Street in 1937 as traffic was diverted from Charles Street while foresters removed an ancient Ash tree.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/features/retro-baltimore/bal-nowandthen-pictures-from-retro-baltimore-photogallery.html'><i>Then-and-now pictures from Retro Baltimore</i></a>, <i>The Baltimore Sun</i> (2018)</p><img src='./photos/26.jpg'>", {
                              maxWidth:'auto'});
                      // marker 26
                      var marker26 = L.marker([39.299288000171686, -76.61577954201492], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>1905</h3><p>The Washington Monument viewed southward from North Charles Street.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/features/retro-baltimore/bal-nowandthen-pictures-from-retro-baltimore-photogallery.html'><i>Then-and-now pictures from Retro Baltimore</i></a>, <i>The Baltimore Sun</i> (2018)</p><img src='./photos/27.jpg'>", {
                              maxWidth:'auto'});
                      // marker 27
                      var marker27 = L.marker([39.31922025141625, -76.63576758722053], {
                          icon:eight,})
                          .addTo(map)
                          .bindPopup("<h3>1933</h3><p>Residences along Druid Park Lake Drive viewed from across Druid Lake.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/features/retro-baltimore/bal-nowandthen-pictures-from-retro-baltimore-photogallery.html'><i>Then-and-now pictures from Retro Baltimore</i></a>, <i>The Baltimore Sun</i> (2018)</p><img src='./photos/28.jpg'>", {
                              maxWidth:'auto'});
                      // marker 28
                      var marker28 = L.marker([39.29970856214957, -76.61587620333546], {
                          icon:eight,})
                          .addTo(map)
                          .bindPopup("<h3>1938</h3><p>A view northward of North Charles Street at its corner with West Read Street.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/features/retro-baltimore/bal-nowandthen-pictures-from-retro-baltimore-photogallery.html'><i>Then-and-now pictures from Retro Baltimore</i></a>, <i>The Baltimore Sun</i> (2018)</p><img src='./photos/29.jpg'>", {
                              maxWidth:'auto'});
                      // marker 29
                      var marker29 = L.marker([39.48201553130158, -76.64410040179816], {
                          icon:eight,})
                          .addTo(map)
                          .bindPopup("<h3>1939</h3><p>A view northward of York Road in Cockeysville, with a railroad overpass in view.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/features/retro-baltimore/bal-nowandthen-pictures-from-retro-baltimore-photogallery.html'><i>Then-and-now pictures from Retro Baltimore</i></a>, <i>The Baltimore Sun</i> (2018)</p><img src='./photos/30.jpg'>", {
                              maxWidth:'auto'});
                      // marker 30
                      var marker30 = L.marker([39.29051260933729, -76.61950469285195], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>1905</h3><p>A view northward of North Howard Street at its junction with West Fayette Street.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/features/retro-baltimore/bal-nowandthen-pictures-from-retro-baltimore-photogallery.html'><i>Then-and-now pictures from Retro Baltimore</i></a>, <i>The Baltimore Sun</i> (2018)</p><img src='./photos/5.jpg'>", {
                              maxWidth:'auto'});
                      // marker 31
                      var marker31 = L.marker([39.29154527007866, -76.61339555204013], {
                          icon:five,})
                          .addTo(map)
                          .bindPopup("<h3>1905</h3><p>A view eastward of Dark Lane, between St. Paul Street and Calvert Street, officially designated a street in 1817.</p><p><b>Source: </b><a href='https://www.baltimoresun.com/features/retro-baltimore/bal-nowandthen-pictures-from-retro-baltimore-photogallery.html'><i>Then-and-now pictures from Retro Baltimore</i></a> (53/200), <i>The Baltimore Sun</i> (2018)</p><img src='./photos/31.jpg'>", {
                              maxWidth:'auto'});
                    // marker 32
                    //var marker32 = L.marker([39.39260367236786, -76.54802113419358], {
                    //    icon:eight,})
                    //    .addTo(map)
                    //    .bindPopup("<h3>house</h3><p>mr s house</p><img src='./photos/house.png'>", {
                    //        maxWidth:'auto'});

// SL 

    var marker32 = L.marker([6.916948958683118, 79.86484156289887], {
        icon:six,})
        .addTo(map)
        .bindPopup("<h3>c. 1910s</h3><p>A view northward of the Victoria Memorial Eye & Ear Hospital, now the Victoria Memorial Building, in Colombo, established in 1906.</p><p><b>Source: </b><a href='https://lankapura.com/2013/10/victoria-memorial-eye-hospital-colombo/'><i>Victoria Memorial Eye Hospital, Colombo c1910s</i></a>, <i>lankapura.com</i></p><img src='./photos/32.jpg'>", {
            maxWidth:'auto'});


//

