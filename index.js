$(document)
    .ready(function() {

      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

      $('.special.cards .image')
        .dimmer({
            on: 'hover'
         });


    // let projects = [
    //     {
    //         name: "MSTA-Connect",
    //         stack:"C#, ASP.Net MVC 5, HTML5/CSS3, Entity Framework, SQL, Azure, CI/CD, Azure DevOps",
    //         details: "Contributions: Lead developer for the project.",
    //         image: "msta.png",
    //         github: "none",
    //         website: "https://mstaconnect.azurewebsites.net/"
    //     },
    //     {
    //         name: "GOBii",
    //         stack:"WordPress, WordPress Theme, Bootstrap, PHP, HTML5/CSS3",
    //         details: "Contributions: Designed and developed the website from ground-up. Participated in stakeholders meeting from ideation to deployment.",
    //         image: "gobii.png",
    //         github: "none",
    //         website: "https://gobiiproject.org/"
    //     }
    // ];

    // let root = document.querySelector("#projects-root");

        // let skills = document.querySelector("#skills-section").onmouseover = 
         //   function(){
          //      this.a
           // };
         



    })
  ;

