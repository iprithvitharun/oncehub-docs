// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started with OnceHub',
      items: [
        'getting-started/introduction-to-oncehub',
        'getting-started/create-a-shared-mailbox',
        'getting-started/field-library',
        'getting-started/mobile-app-sms-notification',
        'getting-started/redesigned-invite-email',
        'getting-started/Content-and-visual-guidelines',
      ],
    },
    {
      type: 'category',
      label: 'Connecting Calendars and Video Apps',
      items: [
        'connecting-calendars-video-apps/overview',
        'connecting-calendars-video-apps/video-setup',
        'connecting-calendars-video-apps/o365',
        'connecting-calendars-video-apps/icloud',
        'connecting-calendars-video-apps/google-calendar',
        'connecting-calendars-video-apps/exchange-outlook',
      ],
    },
  ],
};

export default sidebars;
