import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { useFetchClient } from '@strapi/strapi/admin';
import { getTranslation } from '../utils/getTranslation';
import { useEffect, useState } from 'react';
import { Button } from '@strapi/design-system';
import { Box } from '@strapi/design-system';
import { Table } from '@strapi/design-system';
import { Thead } from '@strapi/design-system';
import { Tr } from '@strapi/design-system';
import { Th } from '@strapi/design-system';
import { Typography } from '@strapi/design-system';
import { Tbody } from '@strapi/design-system';
import { Td } from '@strapi/design-system';
import { Checkbox } from '@strapi/design-system';

const HomePage = () => {
  const { get } = useFetchClient(); // ✅ Hook called inside function component
  const [emails, setEmails] = useState<{ id: Number; email: string }[]>([]);
  useEffect(() => {
    const fetchEmails = async () => {
      const res = await get('/content-manager/collection-types/api::subscriber.subscriber');
      const list = res.data.results;
      setEmails(list);
    };
    fetchEmails();
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(emails.map((e) => e.email).join('; '));
    alert('✅ Emails copied');
  };

  return (
    <Main>
      <div style={{ padding: '56px' }}>
        <h1
          style={{
            fontSize: '18px',
            marginBottom: '12px',
          }}
        >
          Newsletter Subscribers
        </h1>
        <Button onClick={handleCopy}>📋 Copy all emails</Button>
        {emails.length > 0 && (
          <Box padding={8} background="neutral100">
            <Table>
              <Thead>
                <Tr>
                  <Th>
                    <Typography variant="sigma">Email</Typography>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {emails.map((entry) => (
                  <Tr key={entry.id}>
                    <Td>
                      <Typography textColor="neutral800">{entry.email}</Typography>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
        ;
        <br />
      </div>
    </Main>
  );
};

export { HomePage };
