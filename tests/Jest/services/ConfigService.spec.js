import ConfigService from '../../../src/services/ConfigService';


test('undefined config returns default values', () => {
    const config = new ConfigService(undefined);
    expect(config.getRunId()).toBe('');
});

test('null config returns default values', () => {
    const config = new ConfigService(null);
    expect(config.getRunId()).toBe('');
});

test('empty config returns default values', () => {
    const config = new ConfigService({});
    expect(config.getRunId()).toBe('');
});

test('runId is correctly read', () => {
    const config = new ConfigService({
        'testrail': {
            'runId': '123',
        }
    });
    expect(config.getRunId()).toBe('123');
});

test('leading R from Run ID is correctly removed', () => {
    const config = new ConfigService({
        'testrail': {
            'runId': 'R123',
        }
    });
    expect(config.getRunId()).toBe('123');
});

test('runId with whitespace is correctly trimmed', () => {
    const config = new ConfigService({
        'testrail': {
            'runId': ' 123 ',
        }
    });
    expect(config.getRunId()).toBe('123');
});


test('domain is correctly read', () => {
    const config = new ConfigService({
        'testrail': {
            'domain': 'my-domain',
        }
    });
    expect(config.getDomain()).toBe('my-domain');
});

test('username is correctly read', () => {
    const config = new ConfigService({
        'testrail': {
            'username': 'user123',
        }
    });
    expect(config.getUsername()).toBe('user123');
});

test('password is correctly read', () => {
    const config = new ConfigService({
        'testrail': {
            'password': 'P123',
        }
    });
    expect(config.getPassword()).toBe('P123');
});

test('projectId is correctly read', () => {
    const config = new ConfigService({
        'testrail': {
            'projectId': '123',
        }
    });
    expect(config.getProjectId()).toBe('123');
});

test('leading P from Project ID is correctly removed', () => {
    const config = new ConfigService({
        'testrail': {
            'projectId': 'P123',
        }
    });
    expect(config.getProjectId()).toBe('123');
});

test('projectId with whitespace is correctly trimmed', () => {
    const config = new ConfigService({
        'testrail': {
            'projectId': ' 123 ',
        }
    });
    expect(config.getProjectId()).toBe('123');
});

test('milestoneId is correctly read', () => {
    const config = new ConfigService({
        'testrail': {
            'milestoneId': 'P123',
        }
    });
    expect(config.getMilestoneId()).toBe('P123');
});

test('leading M from Milestone ID is correctly removed', () => {
    const config = new ConfigService({
        'testrail': {
            'milestoneId': 'M123',
        }
    });
    expect(config.getMilestoneId()).toBe('123');
});

test('milestoneId with whitespace is correctly trimmed', () => {
    const config = new ConfigService({
        'testrail': {
            'milestoneId': ' 123 ',
        }
    });
    expect(config.getMilestoneId()).toBe('123');
});

test('runName is correctly read', () => {
    const config = new ConfigService({
        'testrail': {
            'runName': 'P123',
        }
    });
    expect(config.getRunName()).toBe('P123');
});

test('closeRun is correctly read', () => {
    const config = new ConfigService({
        'testrail': {
            'closeRun': true,
        }
    });
    expect(config.shouldCloseRun()).toBe(true);
});

test('closeRun default is FALSE', () => {
    const config = new ConfigService({});
    expect(config.shouldCloseRun()).toBe(false);
});
