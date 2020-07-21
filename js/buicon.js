$(document).ready(function(){
    const graphic_services =["Logo Designs","Flyers",'Pennants','Customizations','Signboards','Billboards','Book Banding','Packaging','Plaques']
    const g_imgs =['../images/goods.png']
    const g_length = graphic_services.length
    const container = $('#root').css('background','pink')
    
    var cols = $('div').addClass("col-lg-4 col-md-6 col-sm-6 ")
    var single_cat = $('div').addClass('single-cat text-center mb-50 bg-blue')
    var cat_icon = $('div').addClass("cat-icon")
    var cat_cap = $('div').addClass("cat-cap")
    var cat_icon_span = $('span').addClass("flaticon-development")
    var cat_icon_img = $('img')
    var cat_cap_heading = $('h5')
    var cat_cap_p = $('p')

    function addService(root){
        for(let i=0; i < g_length; i++){
            cat_icon.append(cat_icon_img)
            cat_icon.append(cat_icon_span)

            cat_cap.append(cat_cap_heading)
            cat_cap.append(cat_cap_p)

            single_cat.append(cat_icon)
            single_cat.append(cat_cap)
        }
    }
});