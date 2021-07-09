import { useState, React, useEffect } from 'react';
import { Stack, Button, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import UserMoreMenu from './UserMoreMenu';
import './AppListingLevels.css';

// ----------------------------------------------------------------------

export default function AppListingLevels() {
  const [levels, setLevels] = useState([]);
  const getAllLevels = async () => {
    await fetch('http://localhost:3000/get/levels/')
      .then((res) => res.json())
      .then((res) => {
        setLevels(Object.values(res.data.commands));
      });
  };

  useEffect(() => {
    getAllLevels();
  }, []);

  return (
    <Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          Liste des paliers
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to="#"
          startIcon={<Icon icon={plusFill} />}
        >
          New User
        </Button>
      </Stack>
      <Stack className="listing-levels">
        <table>
          <tbody>
            <tr>
              <th>Nom</th>
              <th>Palier</th>
              <th>Options</th>
            </tr>
            {levels.map((movie, id) => (
              <tr key={`movie-${id}`}>
                <td className="align-center">{movie.message}</td>
                <td className="align-center">{movie.level}</td>
                <td className="align-end">
                  <UserMoreMenu />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Stack>
    </Stack>
  );
}
