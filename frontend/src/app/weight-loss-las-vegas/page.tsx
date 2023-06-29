import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import weight from "public/images/weight-loss-las-vegas.jpg";

export const metadata: Metadata = {
 title: "Medical Weight Loss Service in Las Vegas",
 description:
  "Achieve your weight loss goals with our proven and personalized weight loss service in Las Vegas - transform your body and improve your health today.",
};

function Weightloss() {
 return (
  <div>
   <PageBanner
    heading="Medical Weight Loss Service in Las Vegas"
    body="Achieving and maintaining a healthy weight can be challenging.At Prime Wave, we offer personalized diet and exercise plans, prescription medications, nutritional counseling, and ongoing support from board certified medical professionals to help you reach your weight loss goals safely and effectively.Losing weight is important for overall health, as it can lower your risk of conditions such as heart disease, diabetes, and high blood pressure.
 Contact us today to learn more about how we can help you achieve a healthier lifestyle."
    src={weight}
    height={400}
    width={400}
    alt="weight loss las vegas"
    btn={{
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/start",
     text: "Schedule An Appointment",

     icon: (
      <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     ),
    }}
   />
   {/* next section */}
   <section>
    <div className="max-w-screen-xl px-8 py-8 pt-16 mx-auto lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 text-base lg:grid-cols-2 lg:gap-16 md:text-lg">
      <div className="lg:py-4 ">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
         Major Reasons Why You Need to Loss Weight
        </h2>
       </div>
       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Reduce the risk of chronic diseases: Being overweight is a major risk
         factor for a number of chronic diseases, including type 2 diabetes,
         high blood pressure, heart disease, stroke, and certain types of
         cancer. Losing weight can significantly reduce the risk of developing
         these diseases and can improve overall health and well-being.
        </p>
        <p>
         Improve mobility and joint health: Carrying excess weight puts extra
         stress on the joints, which can lead to joint pain, arthritis, and
         mobility issues. Losing weight can reduce the stress on the joints and
         improve mobility, making it easier to participate in physical
         activities and enjoy daily life.
        </p>
        <p>
         Increase energy and improve sleep quality: Losing weight can improve
         energy levels and reduce fatigue. It can also improve sleep quality,
         reducing the risk of sleep apnea and other sleep-related health
         problems.
        </p>
        <p>
         Boost self-esteem and mental health: Carrying excess weight can have a
         negative impact on self-esteem and mental health, leading to
         depression, anxiety, and other mental health issues. Losing weight can
         improve self-esteem and mental health, leading to a better quality of
         life and overall well-being.
        </p>
       </article>
      </div>

      <div className="py-4">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
         Benefits of Medical Weight Loss Service
        </h2>
       </div>
       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Customized plan based on individual needs and medical history: A
         medical weight loss program is tailored to your specific needs and
         medical history. Medical professionals will perform a thorough
         evaluation of your health and create a personalized weight loss plan
         that is safe and effective for you.
        </p>
        <p>
         Supervision by medical professionals: Prime Wave medical weight loss
         service is supervised by our doctors, nurses, and dietitians. This
         ensures that the program is safe and effective, and that any medical
         issues are addressed promptly.
        </p>
        <p>
         Variety of treatments available: We offer a wide range of treatments
         that can help you lose weight, including prescription medications,
         nutritional counseling, and behavioral therapy. These treatments can
         help you overcome obstacles such as food cravings, emotional eating,
         and a slow metabolism that can prevent weight loss.
        </p>
        <p>
         Ongoing support and guidance: We provide ongoing support and guidance
         throughout your weight loss journey. You will have regular check-ins
         with our medical team to monitor your progress, adjust your treatment
         plan as necessary, and provide you with motivation and encouragement to
         stay on track.
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>

   {/* next section */}
   <section>
    <div className="max-w-screen-xl px-8 py-8 mx-auto lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 text-base lg:grid-cols-2 lg:gap-16 md:text-lg">
      <div className="lg:py-4 ">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
         Medical Treatments for Weight Loss in Las Vegas
        </h2>
       </div>
       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Prescription medications: We provide prescription medications that can
         help you lose weight. These medications are FDA-approved and are only
         prescribed if they are deemed safe and effective for you.
        </p>{" "}
        <p>
         Nutritional counseling: Nutritional counseling is an important
         component of medical weight loss. You will work with our registered
         dietitian to create a customized meal plan that is based on your
         individual needs and preferences. This can help you develop healthy
         eating habits that can lead to long-term weight loss success.
        </p>{" "}
        <p>
         Behavioral therapy: Behavioral therapy can help you identify and
         overcome emotional eating and other unhealthy habits that may be
         preventing you from losing weight. This type of therapy can help you
         develop new, healthier coping mechanisms and habits.
        </p>
       </article>
      </div>

      <div className="py-4">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
         Customized Diet Plan and Exercise Regimen
        </h2>
       </div>
       <article className="space-y-4 text-justify text-gray-600">
        <p>
         Importance of a personalized plan: A personalized weight loss plan is
         important because everyone's body is different. Your medical team will
         consider your age, weight, medical history, and other factors to create
         a plan that is tailored to your needs.
        </p>{" "}
        <p>
         Role of diet and exercise in weight loss: Diet and exercise are key
         components of a weight loss program. A healthy, balanced diet can help
         you lose weight and maintain your weight loss, while regular exercise
         can help you burn calories and improve your overall health.
        </p>{" "}
        <p>
         How the plan is created and modified over time: Your medical team will
         work with you to create a weight loss plan that is safe and effective.
         As you progress through the program, they will make adjustments to the
         plan as necessary to ensure that you continue to make progress towards
         your weight loss goals.
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>
   {/* CTA */}
   <CTA
    heading="Weight Loss Experts in Las Vegas"
    body="Are you struggling to lose weight and improve your health? Look no further than Prime Wave. Our highly trained staff offers various types of weight loss treatments, including personalized nutrition plans, hormone therapy, and medication-assisted weight loss. With years of experience in the field, we are dedicated to helping our patients achieve their weight loss goals in a safe and effective manner. Our team will work with you to develop a customized plan that addresses your unique needs and lifestyle, helping you to shed unwanted pounds and improve your overall health. Contact us today to schedule your appointment and experience the expertise of our team."
    src="/images/happy-man.avif"
    alt="weight-loss-las-vegas"
    btn={{
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/start",
     text: "Schedule An Appointment",

     icon: (
      <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     ),
    }}
   />
  </div>
 );
}

export default Weightloss;
