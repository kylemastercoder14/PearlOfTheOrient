import { BecomeMemberHero } from "./_components/BecomeMemberHero";
import { BecomeMemberWizard } from "./_components/BecomeMemberWizard";

export default function BecomeMemberPage() {
  return (
    <div className="bg-neutral-50">
      <BecomeMemberHero />
      <BecomeMemberWizard />
    </div>
  );
}
