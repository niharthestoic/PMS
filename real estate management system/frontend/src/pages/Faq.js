import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <div className="mx-5 mb-3">
        <Accordion>
            <h1 className='text-center'>FAQ</h1>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <b>How can I contact the property owner or landlord?</b> </Accordion.Header>
        <Accordion.Body>Each listing on our website provides the contact information for the property owner or landlord. You can find their phone number or email address in the listing details, allowing you to reach out to them directly with any inquiries or to schedule a viewing.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <b>What information should I provide in my rental application?</b> </Accordion.Header>
        <Accordion.Body>Rental application requirements can vary, but typically you'll need to provide your personal information (name, contact details), employment and income details, rental history, and references. Some landlords might also require a credit check or background verification.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>How do I schedule a property viewing?</b></Accordion.Header>
        <Accordion.Body>To schedule a property viewing, simply contact the property owner or landlord directly using the provided contact information in the listing. You can arrange a suitable date and time for the viewing and address any questions you might have about the property.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Are utilities included in the rent?</b></Accordion.Header>
        <Accordion.Body>The inclusion of utilities varies from property to property. Some listings might include utilities like water and electricity in the rent, while others might require you to cover them separately. Make sure to inquire about this with the property owner or landlord before finalizing the rental agreement.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><b>What is a security deposit and how does it work?</b></Accordion.Header>
        <Accordion.Body>A security deposit is a sum of money paid upfront by the tenant to the landlord as a form of insurance against potential damages to the property. It is refundable at the end of the lease term, minus any deductions for repairs beyond normal wear and tear.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Can I bring my pets with me to the rental property?</b></Accordion.Header>
        <Accordion.Body>Whether pets are allowed in a rental property depends on the landlord's policies. Some properties might be pet-friendly, while others might have restrictions or require an additional pet deposit. Check the listing details or inquire with the landlord about their pet policy.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><b>What is renter's insurance and is it required?</b></Accordion.Header>
        <Accordion.Body>Renter's insurance is a policy that covers your personal belongings in case of theft, damage, or other unfortunate events. While it's not always required by law, many landlords might require tenants to have renter's insurance as part of the lease agreement to protect both parties in case of unexpected incidents.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><b>How long is the typical lease term?</b></Accordion.Header>
        <Accordion.Body>
        Lease terms can vary, but the most common options are 6 months to 1 year. Some properties might offer shorter or longer lease terms depending on the landlord's preferences and local regulations. Be sure to discuss the lease term with the landlord before signing any agreements.
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header><b>What should I do if I have a maintenance request during my tenancy?</b> </Accordion.Header>
        <Accordion.Body>
        If you have a maintenance request, you should promptly notify the property owner or landlord using their preferred contact method. They are responsible for addressing any necessary repairs or maintenance issues outlined in your lease agreement.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    
  );
}

export default Faq;