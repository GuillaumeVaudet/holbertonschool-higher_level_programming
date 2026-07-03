def generate_invitations(template, attendees):
    if not isinstance(template, str):
        print('Template must be a string')
        return

    if not isinstance(attendees, list):
        print('Attendees must be a list')
        return

    for element in attendees:
        if not isinstance(element, dict):
            print('Un des éléments n\'est pas un dictionnaire')
            return

    if not template:
        print('Template is empty, no output files generated.')
        return

    if not attendees:
        print('No data provided, no output files generated. ')
        return

    for index, attendee in enumerate(attendees, start=1):
        template_copy = template
        if attendee.get('name') is not None:
            result = template_copy.replace(
                "{name}", str(attendee.get('name')))
        else:
            result = template_copy.replace("{name}", 'N/A')
        if attendee.get('event_title') is not None:
            result = result.replace(
                "{event_title}", str(attendee.get('event_title')))
        else:
            result = result.replace("{event_title}", 'N/A')
        if attendee.get('event_date') is not None:
            result = result.replace(
                "{event_date}", str(attendee.get('event_date')))
        else:
            result = result.replace("{event_date}", 'N/A')
        if attendee.get('event_location') is not None:
            result = result.replace(
                "{event_location}", str(attendee.get('event_location')))
        else:
            result = result.replace(
                "{event_location}", 'N/A')

        filename = f"output_{index}.txt"

        with open(filename, 'w') as f:
            f.write(result)
