import React, { ReactElement } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Box, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Textarea } from 'src/shared/primitives';
import { DefinitionSchema } from 'src/backend/controllers/utils/interfaces';
import NsibidiInput from '../NsibidiForm/NsibidiInput';
import AddSection from './AddSection';

const IgboDefinitions = ({
  igboDefinitions,
  index,
  control,
  handleDeleteGroupIgboDefinition,
  handleAddGroupIgboDefinition,
} : {
  igboDefinitions: DefinitionSchema['igboDefinitions'],
  index: number,
  control: Control,
  handleDeleteGroupIgboDefinition: (value: number, secondValue: number) => void,
  handleAddGroupIgboDefinition: (value: number) => void,
}): ReactElement => (
  <Box className="w-full">
    {igboDefinitions.map((igboDefinition, igboDefinitionIndex) => (
      <Box key={igboDefinition}>
        <Box className="list-container">
          <h3 className="text-xl text-gray-600 mr-2">
            {`${igboDefinitionIndex + 1}.`}
          </h3>
          <Box className="flex flex-col space-y-2 w-full">
            <Controller
              render={(props) => (
                <Textarea
                  {...props}
                  rows={3}
                  className="form-textarea"
                  placeholder="Definition in Igbo"
                  data-test={`nested-definitions-igbo-${igboDefinitionIndex}-input`}
                />
              )}
              name={`definitions[${index}].igboDefinitions[${igboDefinitionIndex}].igbo`}
              defaultValue={igboDefinition?.igbo || ''}
              control={control}
            />
            <Controller
              render={(props) => (
                <NsibidiInput
                  {...props}
                  placeholder="Definition in Nsịbịdị"
                  data-test={`nested-definitions-nsibidi-${igboDefinitionIndex}-input`}
                />
              )}
              name={`definitions[${index}].igboDefinitions[${igboDefinitionIndex}].nsibidi`}
              defaultValue={igboDefinition?.nsibidi || ''}
              control={control}
            />
          </Box>
          <IconButton
            colorScheme="red"
            onClick={() => handleDeleteGroupIgboDefinition(index, igboDefinitionIndex)}
            className="ml-3"
            aria-label="Delete"
            icon={<DeleteIcon />}
          />
        </Box>
      </Box>
    ))}
    <AddSection
      label="Add Igbo Definition"
      onClick={() => handleAddGroupIgboDefinition(index)}
    />
  </Box>
);

export default IgboDefinitions;
