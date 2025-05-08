import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // All tabs functioning as required: 30-70 layout, content display, PDF generation with preserved formatting and clickable links >
 html2pdf: any;

  @ViewChild('pdfContent') pdfContent!: ElementRef;
  alltabs = [
    { 
      id: 1, 
      title: 'Fruits', 
      content: `
        <h2 style="color: #4CAF50;">Welcome to Our Platform</h2>
        <h2 style="color: #4CAF50;">Fruits</h2>
        <p>Visit our website: <a href="https://www.google.com" style="color: #2196F3;">https://www.google.com</a></p>
        <img src="https://t4.ftcdn.net/jpg/06/32/57/11/240_F_632571187_glzcmAoI5egceKDX23z0SxqpJUxAQPk4.jpg "  height="250px" height="250px"alt="Apple">
        <p>
       Fruits are an essential component of a balanced diet, offering a wide range of health benefits due to their rich content of vitamins, minerals, antioxidants, and dietary fiber. Regular consumption of fruits supports immune function, aids in digestion, and helps reduce the risk of chronic diseases such as heart disease, diabetes, and certain types of cancer. Their natural sugars provide a healthier alternative to processed sweets, while fiber promotes satiety and regulates blood sugar levels. Additionally, fruits are hydrating and contribute to overall well-being by supporting skin health, energy levels, and metabolic processes. Incorporating a variety of fresh fruits into daily meals is a simple yet powerful way to maintain optimal health and longevity.
       
       </p>
        <p>Fruits are nature’s powerhouse of nutrition and play a vital role in promoting overall health. Apples, for instance, are rich in fiber and antioxidants, making them excellent for heart health and blood sugar regulation. Bananas provide a quick energy boost and are high in potassium, which supports healthy blood pressure and muscle function. Grapes, especially red and black varieties, are packed with antioxidants like resveratrol that promote heart and brain health. Oranges are renowned for their high vitamin C content, which strengthens the immune system and improves skin health. Mangoes are not only delicious but also loaded with vitamins A and C, benefiting both immunity and eye health.

Blueberries are considered a superfood due to their potent antioxidants that protect the brain and support cognitive function. Strawberries are low in calories but high in vitamin C and fiber, making them great for cardiovascular health and skin vitality. Pineapples contain bromelain, an enzyme that aids digestion and reduces inflammation. Watermelons are incredibly hydrating and rich in lycopene, an antioxidant that supports heart and skin health. Finally, avocados, although often mistaken for a vegetable, are fruits that provide healthy fats, fiber, and potassium—making them ideal for brain function, heart health, and skin nourishment. Including a variety of these fruits in your daily diet ensures a natural intake of essential nutrients, supporting long-term wellness and disease prevention. </p>
      
      `
    },
   
    { 
      id: 2, 
      title: 'Grains', 
      content: `
        <h2 style="color: #4CAF50;">Welcome to Our Platform</h2>
        <h2 style="color: #4CAF50;">Grains</h2>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS3cB_4GQYTfxRy4BB7F0ATB6Cf_zKO6urA&s " hieght="400" width="350" alt="">
        <p>
       Grains are a cornerstone of a healthy diet and provide a wide array of essential nutrients that support overall health. Whole grains, such as brown rice, quinoa, oats, and whole wheat, are particularly beneficial as they are rich in fiber, B vitamins, iron, and magnesium. The fiber content in grains aids digestion, helps regulate blood sugar levels, and promotes heart health by lowering cholesterol. Additionally, whole grains are a great source of complex carbohydrates, which provide steady energy throughout the day, preventing energy spikes and crashes. Regular consumption of grains has been linked to a reduced risk of chronic diseases, including heart disease, type 2 diabetes, and certain cancers. They also contribute to maintaining a healthy weight, as their high fiber content promotes feelings of fullness and reduces overeating. Including a variety of whole grains in the diet is an easy and effective way to improve overall health and well-being, while also supporting sustainable eating practices.
       </p>
      Grains are an essential part of a balanced diet and provide numerous health benefits due to their rich content of fiber, vitamins, minerals, and complex carbohydrates. Among the most important grains for the body are oats, quinoa, brown rice, barley, whole wheat, and millet.

Oats are known for their ability to lower cholesterol and stabilize blood sugar levels due to their high fiber content, especially beta-glucan.

Quinoa is a complete protein, making it especially valuable for vegetarians and vegans. It also provides essential minerals like magnesium, iron, and zinc.
        <p>
      `
    },

    { 
      id: 3, 
      title: 'Sprouts', 
      content: `
        <h2 style="color: #4CAF50;">Welcome to Our Platform</h2>
        <h2 style="color: #4CAF50;">Sprouts</h2>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5QWFFWvUqK7x1mrVNhHy6q6FFWJBJkvdRw&s " alt="Apple">
        <p>
       Sprouts are young, germinated seeds that offer a wealth of nutrients and are highly beneficial for the body. When seeds like mung beans, lentils, or alfalfa are sprouted, their nutritional profile improves significantly, making them an excellent addition to a healthy diet. Sprouts are rich in vitamins, minerals, antioxidants, and enzymes that aid in digestion and support overall well-being. The sprouting process increases the bioavailability of nutrients like vitamin C, folate, and B vitamins, while also enhancing protein digestibility.

In the body, sprouts work by promoting gut health due to their high fiber content, which supports healthy digestion and regular bowel movements. The enzymes in sprouts help break down food more efficiently, easing digestion and allowing the body to absorb nutrients more effectively. They are also known to have detoxifying properties, helping the body eliminate toxins and waste. The antioxidants found in sprouts combat free radicals, reducing oxidative stress and lowering the risk of chronic diseases such as heart disease, cancer, and diabetes.
Additionally, sprouts are low in calories but high in essential nutrients, making them ideal for weight management. They also provide a natural boost to the immune system and help maintain energy levels. With their combination of protein, fiber, and micronutrients, sprouts are a powerhouse food that supports metabolism, improves skin health, and helps in tissue repair and regeneration.  
       </p>
      `
    },
{ 
      id: 4, 
      title: 'Milk-Products', 
      content: `
        <h2 style="color: #4CAF50;">Welcome to Our Platform</h2>
        <h2 style="color: #4CAF50;">Milk-products</h2>
        <p>Visit our website: <a href="https://en.wikipedia.org/wiki/Dairy_product" style="color: #2196F3;">https://en.wikipedia.org/wiki/Dairy_product</a></p>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALsAxwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEkQAAECBAIFBwoEAwYGAwEAAAIBAwAEERIhIgUTMTJBBkJRUmFxkRQjYnKBobHB0fAzQ4KSJOHxFjRTc6LCFSVEY4OydJPiB//EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAjEQACAgICAgIDAQAAAAAAAAAAAQIRAyESMQRBMmETIlFS/9oADAMBAAIRAxEAPwD6CymSCAGObCLVXJ6sYzUzpZb9aXpW+GH1iRDnjpUf4Zr1bvauK/GLUSOFKXSyFF5IMQe3HfVi9UvCCcAqz/Ga220RG234wYIxJBieqGDQGwdc8VEo+U+sF3vx+UFq0MBK6x5SO9cNRG32KvvSEnJRWwx2WJEiXJkieU9y2PUtgqntHAg58seE314LQRiKp/7QaCUA2Ue2WRdZflzR44QgAk1cQkOW3FSXjTtwXbgnGkMo2ByogTeS4yER9LD4wOaCD1wFzbStFeC4KmFF4pHPjPf9IMq1d+Y8ROEnsSiV7Kl3wK7oyed/F05NDmzDLiDKdyJRVTxWDwiuxeTDDG+0gae/Yn1j3Vlvap79ifWEx8lZZ07pjSOlXCLnFOH4YWxSvIjR35U5pNu7NcM2XwVFSO4wO5SG5OOgZflj/wBxoxTxgtjPvk36NpLj4xk/7GT0uYlo/lXpNgR5rhq4ngiinujQsSulQkxamHZeZId5y20j7VRUp74bhF9Hc2MEbsPdiaLAmjnHwuGYYIbaZSJFrVVpbSvRxXphgYao/RLNdCvG0cpJkRbjokhR0DQbA2kiRt63zQW5svjAjRlEH9a6GqC4SxISuxRUxRfYtPCFXYX0HPrYdobtqWkPGIKhdUf1F/WKpibveGxrLjvVHZt4KlK9sTbeH0f0knzgtARayJX26psvRwx8UiRukBlYJCPVLZ8V90UeU58gj+p1E+CLFmY/W51oqnxxgrYGGXxZcMQURzWPuXD1sUw7KRQy7rd8bSElEvZxhnpC9l009qpYi6o5e/h74QCy75S06BZRyl0qlF+dIa6RPzIj1i9yY/GkBonk7JFblEVLv2quz7xiGWPNlIukWAtlxRbKlrWRI96B3/NSxerbHmjXM5D1hu8IXCqbQZdDFYpI7Di2IEAnF2A4Dv8AViCy7rWt8nK4SJStLaFVRVp2KqV9seK2OXNF4Jfzt3L7IaDEkgBEd55OfuX5RYC2bn344xbMFYbXmiK6u6OynTjgn0ji9Vz9sHiCzrr+bFiGMVo40G+P7ip8o7XS3+K2P/lSO4nWWL/uiiYuN5gri38w+jReFI4HBA7QFwvh40ggF3rGnGx3SIsP5r4QVE6wZqXdeu8o/LJNWQjQkVKLVKp01THBcYLm3hvG+71uCVXZtr0cI5DsD/1H4Vjw2StuNwXLh7UVUSiKtOzj7IeXVCp7PRWOihk65OrHRF6KrZQAjHClj13VH7+UUgbp22duWPUaLMRll3rR7P6QhzISq3zMyV2XWe+iIsMALmwu0Ay/MSDTsx+K8N5D1a4onsRUSHSCLX5H37YpQrZS2ZX+jbE0L74ff0gwEHntD7o9Npo+bbBUQNgRLku9GKhHzzpBzqF41+kXT46oPWyj7YrDfL2D7v5wr7GXQLOmOuaG4fRzU7V+CRwoVg63e1m6PFK/TGA3rndJNZWyEakRFtTgip0Vp8YMXzoCQZS5pFRVCqbe+i++FfR3sjpA7AEesXy/pArBWPDFk9ne3v0xQpZ4TGtWMxsi5Or8I8rzo9Nb2etd6MB0IA51voilO6KM4IH0IvZXe9X4wOyuSLZdPPQY9gl0TNCvGzet5sS871v3YRIGi6w9X7SsWNttNb5b3Ww+MVI2DX9ch/d9Ikmfnf6l+kFio8y2JVHrDBOKEayXZi9ES/nFCL560xJv1iXb3wfc11h/Tj8Ipeb1tuUrubdhX2bY44qeb3ubq/v6QBfrdJtMO3asWidERJUzIqCtVTaioSYLhhDGayAImVxc7opC11f+cSdm6UtMD4KyqfOFl8h/Rbq/OmPTRY6CCTz13op8I6FYUCtt58gkQ+iKr8Ei5tt3/CIfWFU+KQNMvsAf8QThesfyotPGCWQstLUEIl/3F+0hItdHMYSqj6pRcRD1hgApgQPNvW87b48eGMDvPQ7mkKotjU5hoPzRgcpvW3eTtE56WxPGAG5N2YtvIRHnDdmp3QX5XKSQWk+PqjRaeCRN5f8ATofh/C9wGjMRMSIvb/SKbWLyELrrku27V2bYWaR5StS8sRy4kRDS25cPakBJymmXWRK0W7uzt7Yyz83CnV2VjgyV0NS0bYZWHvCg3W9HdFErJlL6110h1rgjdaWGFentVfdC9zSjps71pFvW0SvhAouke+USl5a6ih1grbGT4+eIjKK7o4kz73NT4JFiMu8xhz9qxsx/CyMuw2Xc8yMeuZwgWTIjuG0svor7YJJepDHFYDvRfJpnIuqMDrBUnuEXWL4Q0OxZdB7Tg+jd6UT1hdUYXOrAxvkG4RDFyI5Uh54jHITX+EP7UjOO6Vfa/N+EBO8oZkOd/pSA5UFKzYofolFJOCGY9W2XW2r78Yx46cmXfzSi5uZI+dA5hcR7MvC7dZ1vv4QOGefkyMua7vdqB9IrlCi4k/j5YgttEXLvAaQvbsZdBLm/+lPnHR7MDlAusnwVfrHQGMuiKNkBjeRN/qVU+UQmz1R/i/BE+Ff9UQ0s8IM5CK7q3LGbaYfdudArhutt47OEZc/kfiddhhDlsftzcsBj6Xd3YquK+2ItvsG86XNEbrS4Kq0x7oz2sgmVO+TnLMxYD8V++6ME/OdNUXji+x3MzTEvLOlcN1q5YxE1NOzEsWquu1iDaO2i1+dIvVSMCE8pEK70BSI+T60dbcV2aMOXM8rRuxY1BWFOviDOqmCEsqc7iiYrC2cc8rmZOx20WyuIenZSnv8AGKp4fPFzvNZfFF2+1fCBmF88N8Uiq2UXdn0/RMowcm0+0NxEKF0rXjiqYY9ENWpQrM5F6sZvkjpEgDUH+Fd24bKKnjGvqIZrv3FH0XjcXjVI8XMmpNMESSz5CIfS4xa5LEe4UWK56Q+td94x7VqzrDGhESKS5CFt5fq+UVi2/eN91o+lFpvDLhc8VvVH74wC/Ok7uebH3r9IEpqK2FKyicUdcQhb9pBLSWSzXpDd44wAX4wjzYZu/wC2Iw/ZtjSBXoAmFg52AJiKiCidKEUweeHc7CN9M8TkUiTlTzw7llhHKpnh5LQqGY3klhgjQm8JW5hErS6EVUr7ME8IWyi54cMo1zyIctvhDCnr+UWk6EVfFY6K3DIwG9BQrUwEsEjyAx10ZScfdd3yKCNHmQaqVDLrCucLspsT2J74YFotjedzfDwiJtSzR5N7d3o8jLhnJ2yimugbScoN46q3NzRH6QTo7RwymYyInbcw8PDphczODKaSdGYK638MuxfntSCpqcadlhI3SFoiPd2qqUSkZ4OEE8jWykU26AtLy99zrW7fZd3bfj7ozT7RWTLRlbrBULh7UXFIaTGkA1ItmRELe63wqqwH/wAPnpgxva1AkSCOsFblr0CmPjSMiXOfJdm+L4KmK5aRnJt6Uk5IXHrRtct2DwRV6E249kR0hLP6MnNRNjaQihXCVRVFrsXjsWPougpBrRTOoazEVSdcLapU+CbPHpjM8sNBTPKOWaYkitfZcUt5USi4KiqiKqJgi+z2RvjjTpP2R/M7bJckZ5p150WiEtgl3/dI3+j3xMLTIcvW2pTamMfDOSiv8nOUPk023qbj1TrfESXYtUVaovTxqix9gkJgb97m5vHBY9bD+mlsxZ05bHLyteaIOd9FWKpmaakgudzO/ltjFcxMDKS2t3i3WxLp7fvhCNTIz1rpXOl6X3RI0TyV0Z1EOJ8nT1rpXF7k7osDrQK0tkTN8WguMrRHrYJ2qq8EjNb7H+gloL5lr0c3h/OkGuLCDkrpj/jb08+yH8GySNNOFtcXFSKnBNlOzHsh65GjGtWJk7BnlgF+DHYCfh2KhTOQmeHPDqbSFhhnich4nks3DmXHJAUuEMpYf3feP30LAQ4WylkM2rrOb+76IsLm2/0wbL3cwS/b8oahSbhEH5Ql6pKvxRI6OUrkFVEhQtnR8Y6F4sYVzE9kGM9Oz7rTxXl+qCdFSOmpvzUxIjLsD+Y86o+AqKqvuTtg7SXJ10JYnZQRmXx/DbI7MaYYrguPBaJ2xgyRlNFY8YujJaQ0lqvOutXPlS0SrXsqqYp3f1hDMcop6XkBYN0StuMcmKVWu3o/njFk4joTLrWkCcbfxuFwFQk6K1xVVpt2Y0TDbQWj79y1wt3eRaYe/wCaxOOGMVtGuMf4biTdY0VLS3lbF09qhJ17iJqiKqIi1oiKtMOiG2hp9qe1syAla2VgkXEqY07kVPFI+daVmdMaWn7crbrxIIiIUSqrTavCtE+8NBpTlBKcnJZjRUu+2RSoIBEWJGW0lonFVVV2cYzfjnF23r0gyjqjZyZee8fgsIZ10tc+LV2tEbsvatPrhGS5N8qJzS3LDRrGte1BGV3AcGzVMO9I18+4IPO7o3F+6nDpWlVw7YeeOWtCuotgGn9CNaTlh1Q/xjbSWkVEV1KVUS6NuHR7YlyG035WZSc3d5SySg4LmCrwqqcFwVF7UWCmRmXQIpeWecEd4rVpXooiKVey2FKSM47ykanpLR8w3M22vkLBoJUVERSQxFF2UrclaRqwKcXTI5JRaNzpFwgAcv6vv2QvRBCGxsPmz53Ns/DaX6rCqdR+UlnXzFvVDmJxy4URKVqq0XCnGNbRlTrRE5gWgIjLdzZioiIiVqsYPTGmX+Uc55HIkQ6PEvOObNcqcV6BTgnHavBIN5Ss6T0hLMWWsSMwNwjdRx+lOColBxTor4QsH/lIao2tQXpDSq9nZ9YST4ovjjuz6ZyOlBlNDtC1ziU++uFfBEh0UA6Jtak2hDmigwaRRphpUZZ/JgziQC+kHOrALywRRZMjC8kzwymIALfhGUiXtQ6kGcl3OIrvciQlbjRtZAH1UhoFGS1F+4QuD7a+1OEcjk86FrWrbHq4V9qRWW/cG999GyIlpOzK6N3rfzSKihQyz9wlMEB9qEqU8dsewAekWj3Gmf2Ivyjo4FMdUj2kSjqRloUW6Z0Jo7TbOr0gwLlv4bg4OB3KmKd2xeKLHzXT/ITSejDJ+UIp2UGuZsVRwO8U296d9Ej65SPInKCZWGVw6PgbE6+1bf5zLmtLtrtTHFEX3RNJhh3fabzUtubTpVMVREXavuj6vyg5H6P0xc6A+STZfnMimZekk49+C9sfO9L8mNOaK/FlhmWrsrzJpSnDbRUXs8KxF42jbHPGWy3RMkLTI6Vt1YiSjLC3dU1RKKSrtRErSmFVrjRFRfonJubKe0PLOh+LiDmypqhLVaouxVqvDauCYQr5Jy/lcno0vwfIxHWC4OaqKqolFp01r01jVNPtEd1pby5ipTiq06Y0RjSMeWfJsE0RopjQgPtSIuWzEyT5NXJY2S0qg4YJhsWtOEHrrTuy5S5pU9lcflEdfkJ0CylztvFcETpgCffvARB/ViJLrCIVSvSlNvT94xT0QVhqui0HnXWxEaDlJExSmGECNkMxMu35hx3SSipglF4JxT2QoGRF17UA/q8u6TddlOCL2RKWBqXPWgX4YoOrIqVLCiqmOGC8Ynyk31oakgyf0Zo/ScwwU6JF5Pda0J0bpTiiLhSnCi4UhVpPk/LGDog7r5O1C8lmMbETiJKtUVKLh24Ki4wUx+NqpeZInd4tmxabOlMdvfhEZ5gnTKx3WCW6I1K1eKrhs+qx1/QU3YVJO+TgLDu8OW65FrTtTbtTxgxXoxxzJNAQmJN2mlol2ItfeqeC9EFNaVda3xt6wltTvrsXsWiw6yHPG+zRm5AjqwE3NzMxmaat/QbnwtRPfE1bmefrv0sKie9Fh7EoqmEgBxINeZnOqVvWJovlC9wivz2/u+SwjZSIU2UaVEyD6qRkgcs38saqXcvk2i6wp8Eh8Y0gKdIgzAUJJvS8zL866Hk5GX0qO9FrDDsG/tW//hM/sT6R0IHh87HkTbL8F/D7qkdEW3Rd3CiykSVGIjHtsAT+mpGS/FduLqjiv8ozk/ysfduGUHVj1ixWI5PIxQ1dlI45M1rzrUuFzroiPrQom+UUmPmmh112XNu/zjFzE6+8dzrpOc7MX3SIgf7owZPMm9RVF44UtsdszQtTJOtWsDzSEcETiipxStVptSq0h6E7faRkLY4jlHauxaV9vdGaYZf8jaf1RW45vau1OjtglF8y1e6QtXINt1KpWttU7MPCN/jzbguRHJFXo0JusNMtEZCQ4ERCVO5ERO6F829PTAC/o9oRHWKNxEKKqJxx9uPbCucMZifaLVaiWcJNYQ4Uqirs70xwwrF7bl8yItaRmm2mxLnA5SnYSLx4Q/JX9CUwhgnb/KZhoRLEWxEkQlVMK9C7U4rWqe22Yk5MAaaddInRJS1hEg1Va4dHb04wtV12YZIndKuFn3iaaqqUpWltEw4pSJM6o5MX9ITjzhY2t5RXYlK0RETYmKJxXowXlGg8WHCyQThPtC3bYg6tvePDBFw2psRUXgkUTDxNATpk2JbxDciqiVrUlTBEw2VrCwNJDqS1TREQlaREZF3JRcPBIVadeJ1kdb+lvtrxTZRF+CR3OK6DGDbocaLlH54xfAbX3K23D+CFcNnFUVFw6UTpVdTozk9JyPnTaF9//Ecx7qJsSFfImaaOQYE8rrjaCPbbVKd+FKdkag3hst+8I0QjF7Jzck6KnBdPcy+lb8KwOXO87cXV/pBbh63nZYoHId3OilCAxJZziiDzYzAWui2//mDX+kSet55QOUy01mD/AFQHQUK57Ql4EWjytLnS7hVRe5V2L34d0T0fM+Th5K7ltHL2omFKLiiouCp3QQsy67c/utDl74T8qJoQnGil8zrbfnO9aeC0RIWktlYu9DGadGM/pLcKIjpK8ICm3iOC5po0QhTFJfix0SRc8dEXI0cT6uPoZSjMaf0jpE5x1jXuarqjhGwIRDMZWiO9dhSMfp6a0Z5SToaRl7sMrZKS4JTYiKvCMnkJ8aRjx1YnVOuUQcdEOdAs25OOgTrUqTEsO9NTRIy2idOPzpCV2e0GFxaQ0q9OkP8A08m0Vq9lyoiKnaqxCHiyl6LucV7Gjul2r9VL3Pu9VvHxXYkMtEMaTdeF2YlREea2WPjGZDlqMoFuidAMt9Vx51S7qoiJTuQouLSvKvTYWtO+RMFveSirVf1Kql4LGiPiwjuTJvJJ6SPphz0tJagdIT0uzMvEgNM3+cNVoiIIbVXFMETikU6bZ3hlxuduQiESGlU6UVa1pVMEXbGe5C8mJPQky7pGbEnJ4htaetRdWq1uLHGqotK9Cr0rDydkyM9aBXXc6N0YxlHRmdxYAczzTuEhplsW5Fqi1pSqd8VzE4NhEZWjbm4LT2JRFw90HtS7rvmjFt8RzWvCiolMcK7Fj3/gLE9uDMN80tS7hj03ISRCeO9IopoUlOMAywOttLxRFVOPRtX3xSc2+cyTVovtCKDcLaqqKqrw6MU7ofnyOE82vmB9Yw6OxNsVlyJHztk9bc2ojc1rKLwWlURaLRcejhElhrsbnESNvSsvcU3lEm1tG7FVrSninux4wKZFMXEZXZbe5OhPfBczyG0jfcGk5eZLmi82TSdOG9AE1o7SujP77LE23ui5vNr7UqnsWix0oSr6KwlFMf8AJSa1Ruybo3Nb4jx4ItPcvjGvB8vynRfH/DcK0v3UWvtT2x82lJp1p4XQ3hL+qdqbY1STLUwyLu797IvhnqiGaDu0Pi0iLQedYmG//EpJ4hcnjADmk5MMxzzLf+Y6I/FUhK7pOZl9yZy9VwLk8UxiIcpSDfKV/wDtJPcqfOLc0R4sYzOlmj/u+kZBz0RfBfgsUBMPzB22uOf5bB0X9Soie+Ki5V5LQGX9bykvgiLFB8pnz3H2x/yWv9xYwHNBUWOHgfBm6bdbkmB3diuL3ImCL4wuaSRmJwZXVatpwN4izKa0VFVVxrStdu3shVPTxAyUy7cRbo3FVVVdiV+kZtJ2ZAxICIbcwl21qkRlk2aMWH2a3SGgXZQy1okLXNcty+OxPbT2wM7op8AuuuH2wXyY5YMZWJibKQf6pF5ou5SwROxVFU2IpRpXRKaMfMSuYvxhasvTpVUXYsWjFNaBLJODpmDXRzt8dG2fl2GnC/g9HOesRl7lVY9hXjGWdmc5Sf8A9CflJPUS+gnCmSHemCFWgXpGiKp+1B+UfPneWfKh08kyzKf/AB5NoVH2qKqnsWPoSsieU2hIeqXR7eOMA/2ckXTErSHnfGJ/kb7AoRR82mB0jpZ4SnpmbnXbsuucJyndVcPZDnRvJd120nbWxLLbxrtp4V8FjeSmg5ZrcEf2wyWUENV5q60lPL6qphjSuPHCleiOcpMP6ozeieTUtLvD5q4rSK5ynBUpThsWNA1IiG4MGk2IPNZtXc2YjsTGo7K8cPdFskwLQEINWiJKQkW01XFVVFxRaqu2O4i8ilBsiTRk1v5usPBe7HCLjEYEnBKwrIKbjtAdS0OZTUGyRNW5t7pgkXBvtAvv7+EYlqff0ed3nPWHan1SHkrygYdC53KJfmM/MYPz2mI4uI9V3P8A/mvsVfvbFD6lZcGXNm2YdPuilqbkZsPNTTL3WG5EXwXZEngdNkrGreaPGvQtfDGJTjJLZyoGmZux6120bd0S2/e2LpOcF25p3dKtwuDgqVpRUXhAM62RzIibQllQ7hEkqic1FRK1qvZHstKPgevtJtrV22udNduNErSExzlzoaSXEB09ybYaunNHja0X4jPU7R7Krs4cMIVNT4yNsrN5Wi/Dc4Iq83s7Id6W5QycvLFLS7ovukNpEOIgnGq7FXuWELvk2kMu9dzS7emHyNKVxKY7cakdPA0YXARfpJFhFMS43/jl+ptYImZGelM0pa+11XCJF7kJMV9t0K39KlL/AN7kdIAX/ZNpxPFURY62xuFBASw/4/7RWGklLNBmO60ec5gkZ3+0zAfhSekSLqvG02nigqsBzulprSG/awxu6lsiWvHMRKqr3VphshlH2L3oa6X0wM88IymWWbJRHheuxS7uCV+cDy5uncXN/rj7YDY3Bg0bQzc7d+cTfZojpBTMm1N3X+rHv/CCl8spMzDBbwky6Q0KtUXBY6VIvShlLKRn/XsptjlYsmBpoyZmW0cmJ+bOqVJHnzLHYqYrwXCOg9sv4qYYO6whF0PGhU7MBX2x0F2ImaMWxzez7/lFoNDvejFEvuNeqnxSK0ecv313U+CxQkMmm/v3xa4u6P3sheTrgHlJU2f7fqsFmS9PN+SRxzKZjWhPjYOsImk1Y4IgUJbiuotK1BKIi1omzFYJdcIA3hjPz84/KzROsHY5qm0utRcKl09yeEKJflDpRxbTmUomxEaBPlFBDVuzrt9uo9bNAhzTu9b8ftYUuaVnS2vIuXqD9I8Kae1d1yVw5qdkTkMhuy+1MZXRu++yBX9G5yKULVl1Rx7kVNkVsuHR0rlr0+xIubeczZl3flAGM3pZH2v73J3CO6439F2eMJD02Uv+FOT7HoiRp8FpG8mPOMlfjlhPPSEpm8wG6scsjTG4Joyy8rdI7oaVny/8p/WPA0rNTZ/xDrjn+Yar8Yuck5fyn8Efwy+IxS203eOVPtYpKdoEYUxzLz46kRO3qwXoknb7gEvvh7oG0PJy7h52kXMvFelY0ei2m7yypx+CRlfZb0HMKVlpxW9Ii6BXj99MFEIiGAomZOHd9VjnMoYYbPikOJyEE/oATzAObnZYVO6AJn8rnfLv7I14EWuLMu6nHuip01rbhShJS1NlI4KkZQNDu35Bi9jQzuuzxoZQlsHH7pENYdm8vGAGwWW0QQBdbvffsWOldGvg8N5XDdvXcMOFdvdDRXDE8CVNkC69zXb3Rw7EhnpCp2Dz6jJHKzxIKC0ZCa4JlIV4V6RHDHZ2R5C7SZK9ojSLbq3BcK0X1xj2GT0Kz//Z " alt="Apple">
        <p>
      Milk and dairy products have long been a staple in many diets, providing a rich source of essential nutrients such as calcium, protein, vitamins D and B12, and potassium. These nutrients are crucial for bone health, muscle function, immune support, and overall well-being. Dairy products like milk, yogurt, and cheese contribute to strong bones and teeth by providing bioavailable calcium, while protein in dairy helps build and repair tissues. Fermented dairy products like yogurt also promote gut health, thanks to the probiotics they contain, which support a balanced microbiome and improve digestion. Furthermore, milk-based products are a convenient and affordable source of energy and nourishment for people of all ages.
In conclusion, while milk and dairy products offer valuable nutrients and health benefits, they may not be suitable for everyone. It's important to consider individual health needs, dietary preferences, and environmental concerns when deciding whether to include dairy in the diet. Plant-based alternatives can offer similar nutritional benefits for those who are lactose intolerant, vegan, or concerned about the environmental impact of traditional dairy farming.
       
       </p>
      `
    },

    { 
      id: 5, 
      title: 'Contact', 
      content: `
        <h2 style="color: #4CAF50;">Get in Touch</h2>
        <p>We'd love to hear from you!</p>
        <p>Ms. Supriya Dighe,
           Software Engineer
           (Front- End Developer) </p>
        <p>Email: <a href="Email: supriyashelke838@gmail.com " style="color: #2196F3;">supriyashelke838@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890" style="color: #2196F3;">+91 9767006441.</a></p>
        <img src="https://via.placeholder.com/600x200?text=Contact+Us" alt="Contact" style="max-width: 100%; height: auto;">
        <p>Visit our website: <a href="https://www.google.com" style="color: #2196F3;">https://www.google.com</a></p>
      `
      
    }
  ];
  
  activeTab = 1;
  activeTabContent = this.alltabs.find(tab => tab.id === this.activeTab)?.content;
  isGeneratingPDF = false;

  setActiveTab(tabId: number) {
    this.activeTab = tabId;
    this.activeTabContent = this.alltabs.find(tab => tab.id === tabId)?.content;
  }

  async generatePDF() {
    this.isGeneratingPDF = true;
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const margin = 10;
      const pageWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
      
      for (const tab of this.alltabs) {
        // Create a temporary div to hold the tab content
        const tempDiv = document.createElement('div');
        tempDiv.style.width = pageWidth + 'mm';
        tempDiv.style.padding = '10px';
        tempDiv.style.boxSizing = 'border-box';
        tempDiv.innerHTML = `
          <h2 style="color: #4CAF50; margin-bottom: 10px;">${tab.title}</h2>
          <div>${tab.content}</div>
        `;
        
        document.body.appendChild(tempDiv);
        
        // Convert the div to canvas
        const canvas = await html2canvas(tempDiv, {
          scale: 2, // Higher quality
          logging: false,
          useCORS: true,
          allowTaint: true
        });
        
        document.body.removeChild(tempDiv);
        
        const imgData = canvas.toDataURL('image/png');
        const imgProps = pdf.getImageProperties(imgData);
        const imgWidth = pageWidth;
        const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
        
        // Add new page if not the first tab
        if (tab.id !== 1) {
          pdf.addPage();
        }
        
        pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
      }
      
      pdf.save('all-tabs-content.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      this.isGeneratingPDF = false;
    }
    

    function downloadPDF() {
      const element = document.getElementById('pdf-content');
      
      const opt = {
        margin:       0.5,
        filename:     'example.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        enableLinks:  true // Makes links clickable
      };
    
      // html2pdf().set(opt).from(element).save();
    }



    
   
    
  }
  
  





}

