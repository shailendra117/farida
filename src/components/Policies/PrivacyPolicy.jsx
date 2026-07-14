import { useEffect } from "react";
const PrivacyPolicy = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="max-w-7xl mx-auto mt-8 px-5 py-10">
      {/* Breadcrumb */}

      <p className="text-xs text-gray-500 mb-4">
        <a href="/">Home/ </a>
        <span>Privacy Policy</span>
      </p>

      <h1 className="text-xl font-bold text-gray-800  ">Privacy Policy</h1>

      <p className="text-gray-800 text-sm mb-4 leading-8">
        THIS PRIVACY POLICY IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC
        CONTRACT. THIS PRIVACY POLICY DOES NOT REQUIRE ANY PHYSICAL, ELECTRONIC
        OR DIGITAL SIGNATURE.
      </p>

      <p className="mb-4 text-sm leading-8 text-gray-800">
        THIS PRIVACY POLICY IS A LEGALLY BINDING DOCUMENT BETWEEN YOU AND FARIDA
        GUPTA RETAIL PVT. LTD. (“FG”) IN ELECTRONIC FORM, BY CLICKING ON THE "I
        ACCEPT" TAB OR BY USE OR THE WEBSITE OR BY OTHER MEANS) AND WILL GOVERN
        THE RELATIONSHIP BETWEEN YOU AND FG FOR YOUR USE OF THE WEBSITE (DEFINED
        BELOW).
      </p>
      <p className="mb-4 text-sm leading-8 text-gray-700">
        PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY USING THE WEBSITE, YOU
        INDICATE THAT YOU UNDERSTAND, AGREE AND CONSENT TO THIS PRIVACY POLICY.
        IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT
        USE THIS WEBSITE.
      </p>
      <p className="mb-4 text-sm leading-8 text-gray-700">
        By providing us your Information or by making use of the facilities
        provided by the Website, You hereby consent to the collection, storage,
        processing and transfer of any or all of Your Personal Information and
        Non-Personal Information by FG as specified under this Privacy Policy.
        You further agree that such collection, use, storage and transfer of
        Your Information shall not cause any loss or wrongful gain to you or any
        other person.
      </p>
      <p className="mb-4 text-sm leading-8 text-gray-700">
        FG and its subsidiaries and affiliates and Associate Companies and
        includes the brand “Farida Gupta” (individually and/ or collectively, "
        FG ") is/are concerned about the privacy of the data and information of
        users (buyers/customers/browsers whether registered or non- registered)
        accessing, or purchasing products or services on FG's websites, mobile
        sites or mobile applications ("Website") on the Website and otherwise
        doing business with FG . "Associate Companies" here shall have the same
        meaning as ascribed in Companies Act, 2013.
      </p>
      <p className="mb-4 text-sm leading-8 text-gray-700">
        FG has provided this Privacy Policy to familiarize You with the type of
        data or information that You share with or provide to FG and that FG
        collects from You; The purpose for collection of such data or
        information from You; FG's information security practices and policies;
        and FG's policy on sharing or transferring Your data or information with
        third parties.
      </p>
      <p className="mb-8 text-sm leading-8 text-gray-700">
        This Privacy Policy may be amended / updated from time to time. Upon
        amending / updating the Privacy Policy, we will accordingly amend the
        date above. We suggest that you regularly check this Privacy Policy to
        apprise yourself of any updates. Your continued use of Website or
        provision of data or information thereafter will imply Your
        unconditional acceptance of such updates to this Privacy Policy.
      </p>
      <ol className="list-decimal mb-4 text-sm leading-8 text-gray-900">
        <li>
          Information collected and storage of such Information:
          <ol className="list-decimal pl-6 text-gray-700">
            <li>Personal Information</li>
            <li>Non-personal Informatioin</li>
          </ol>
        </li>

        <li>Collection, Use and Processing of Your Information</li>
        <li>Sharing and disclosure of Your Information</li>
        <li>Information deletion clause</li>
        <li>Information deletion clause</li>
        <li>Security & Retention</li>
        <li>User discretion and opt out</li>
        <li>Business / Assets Sale or Transfers</li>
        <li>Further Acknowledgements</li>
        <li>
          COMPLIANCE
          <ol className="list-decimal pl-6 text-gray-700">
            <li>EU General Data Protection Regulation (GDPR)</li>
            <li>California Online Privacy Protection Act Compliance</li>
            <li>Children’s Online Privacy Protection Act Compliance</li>
            <li>
              Information and Technology Act, 2000 alongwith relevant Directives
            </li>
          </ol>
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicy;
