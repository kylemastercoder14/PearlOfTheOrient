import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  return (
    <>
      {/* Core Functions of Modern Chaplaincy */}
      <section>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#032a0d] mb-3">
          Core Functions of Modern Chaplaincy
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Chaplains today typically serve in the following ways:
        </p>
        <div className="mt-3">
          <p className="text-sm sm:text-base leading-relaxed mb-3">
            <b className="text-[#032a0d]">Spiritual Care:</b> Providing
            religious services, prayer, counseling, and guidance to those in
            need.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-3">
            <b className="text-[#032a0d]">Emotional Support:</b> Offering
            comfort and compassion to individuals in times of crisis, illness,
            or personal distress.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-3">
            <b className="text-[#032a0d]">Cultural and Ethical Guidance:</b>{" "}
            Navigating sensitive moral and ethical issues, often in diverse and
            pluralistic settings.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-3">
            <b className="text-[#032a0d]">Advocacy:</b> Representing the
            spiritual needs of individuals within institutions, ensuring access
            to appropriate religious accommodations and support.
          </p>
        </div>
        <p className="text-sm sm:text-base leading-relaxed">
          The history of chaplaincy demonstrates its evolution from a basic
          religious role to a professional, interfaith service that supports
          people of all walks of life in various institutions around the world.
          Chaplains continue to play a critical role in fostering well-being,
          offering comfort, and addressing the spiritual and emotional needs of
          individuals.
        </p>
        <p className="text-sm sm:text-base leading-relaxed mt-5">
          <b className="text-[#032a0d]">
            Creating a comprehensive Chaplaincy Handbook
          </b>{" "}
          involves covering a wide range of topics that address the roles,
          responsibilities, ethical guidelines, and practical approaches needed
          by chaplains in various settings.
        </p>

        <Accordion type="single" collapsible className="w-full mt-3">
          <AccordionItem value="introduction" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              1. Introduction to Chaplaincy
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Definition and Role of a Chaplain
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                repellendus ab, id rem reiciendis earum suscipit! Ex expedita
                sit quae minus sed ad, eaque nisi officia maiores, numquam enim
                officiis? Consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="core-responsibilities" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              2. Core Responsibilities and Functions of a Chaplain
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Primary Duties and Responsibilities
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="settings" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              3. Chaplaincy Settings and Environments
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Various Settings Where Chaplains Serve
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="skills" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              4. Skills and Qualifications of a Chaplain
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Essential Skills and Educational Requirements
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ethics" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              5. Ethical Guidelines for Chaplains
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Code of Ethics and Professional Conduct
              </p>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="practices" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              6. Practical Approaches and Best Practices
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Effective Methods and Strategies
              </p>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur?
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="self-care" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              7. Self-Care and Well-Being for Chaplains
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Maintaining Personal Health and Balance
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="administrative" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              8. Administrative and Organizational Responsibilities
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Record Keeping and Program Management
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
              </p>
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="conclusion" className="border-none">
            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-[#032a0d] hover:no-underline">
              9. Conclusion
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-800 space-y-3">
              <p className="font-semibold text-[#032a0d]">
                Final Thoughts and Continuing Education
              </p>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Chaplaincy Ministry Details */}
      <section className="space-y-5">
        <div>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            Chaplaincy ministry involves spiritual support and counseling,
            typically provided by a chaplain, who is a trained religious leader
            or clergy member. Chaplains serve in various settings, including:
          </p>
          <ol className="space-y-2 text-sm sm:text-base list-decimal list-inside pl-2">
            <li>Healthcare (hospitals, hospices, nursing homes)</li>
            <li>Military (armed forces, veterans&apos; affairs)</li>
            <li>Prisons and correctional facilities</li>
            <li>Education (schools, universities)</li>
            <li>Corporate settings (workplaces, industries)</li>
            <li>Sports teams and organizations</li>
            <li>Disaster relief and crisis response</li>
          </ol>
        </div>
        <div>
          <p className="text-sm sm:text-base font-semibold text-[#032a0d] mb-3">
            Chaplaincy ministry focuses on:
          </p>
          <ol className="space-y-2 text-sm sm:text-base list-decimal list-inside pl-2">
            <li>Spiritual care and counseling</li>
            <li>Emotional support and comfort</li>
            <li>Crisis intervention and trauma support</li>
            <li>Pastoral guidance and counseling</li>
            <li>Worship and religious services</li>
            <li>Interfaith dialogue and support</li>
          </ol>
        </div>
        <div>
          <div>
            <p className="text-sm sm:text-base font-semibold text-[#032a0d] mb-3">
              Chaplains may provide:
            </p>
            <ol className="space-y-2 text-sm sm:text-base list-decimal list-inside pl-2">
              <li>Confidential listening and counseling</li>
              <li>Prayer and spiritual guidance</li>
              <li>Rituals and sacraments (e.g., baptism, communion)</li>
              <li>Support during times of loss or grief</li>
              <li>Staff support and burnout prevention</li>
            </ol>
          </div>

          <div className='mt-5'>
            <p className="text-sm sm:text-base leading-relaxed">
              The goal of chaplaincy ministry is to foster spiritual well-being,
              resilience, and hope in individuals and communities, regardless of
              their faith background or affiliation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
